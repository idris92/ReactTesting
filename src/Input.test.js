import { shallow } from 'enzyme';
import { findByTestArr } from '../test/test.utils';
import Input from './Input';
import { checkProps } from '../test/test.utils';
import React from 'react';

//We decided to leave the setup here instead of doing it in util because we need to pass a props to it
const setup = (success = false, secretWord = 'party') => {
	return shallow(<Input success={success} secretWord={secretWord} />);
};

//Mock module for destructured useState
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
// 	...jest.requireActual('react'),
// 	useState: (initialState) => [ initialState, mockSetCurrentGuess ]
// }));

test('renders without errors', () => {
	const wrapper = setup();
	const Inputcomponent = findByTestArr(wrapper, 'input-component');
	expect(Inputcomponent.length).toBe(1);
});

test('does not through warning with expected props', () => {
	const expectedProps = { guessWord: 'truth' };
	checkProps(Input, expectedProps);
});
describe('state controlled input field', () => {
	let wrapper;
	let mockSetCurentGuess = jest.fn();
	//this will be used to reset the useState back to its original state.
	let originalUseState;
	beforeEach(() => {
		//This clear the mock function before using it again, to prevent using the previous value
		mockSetCurentGuess.mockClear();
		//this keep the original state before being altered
		originalUseState = React.useState;
		React.useState = jest.fn(() => [ '', mockSetCurentGuess ]);
		wrapper = setup();
	});
	afterEach(() => {
		//this reset the state after each operation
		React.useState = originalUseState;
	});
	test('state updates with value of input box upon change', () => {
		// //created a mock function
		// //This one and the next will be replaced by the destructured method at the top
		// const mockSetCurentGuess = jest.fn();
		// //created a mock state
		// React.useState = jest.fn(() => [ '', mockSetCurentGuess ]);

		// const wrapper = setup();
		const inputBox = findByTestArr(wrapper, 'input-box');

		//created a mock event
		const mockEvent = { target: { value: 'train' } };

		//then we simulate a chnge on the inputBox
		//this simulate an inputBox getting a value of train
		inputBox.simulate('change', mockEvent);

		expect(mockSetCurentGuess).toHaveBeenCalledWith('train');
	});

	test('field is cleared upon submit button click', () => {
		// const mockSetCurentGuess = jest.fn();
		// React.useState = jest.fn(() => [ '', mockSetCurentGuess ]);
		// const wrapper = setup();
		const submitButton = findByTestArr(wrapper, 'submit-button');
		//we gave it a preventDefault function with empty brace because there is a preventDefault on the button and the test is expecting an event as well
		submitButton.simulate('click', { preventDefault() {} });
		expect(mockSetCurentGuess).toHaveBeenCalledWith('');
	});
});

//When success is true and false, which components are showing and which one are hiding, checking for correct behaviours
describe('renders', () => {
	describe('success is true', () => {
		let wrapper;
		beforeEach(() => {
			//this set success to be true
			wrapper = setup(true);
		});
		test('Input component renders without errors', () => {
			const Inputcomponent = findByTestArr(wrapper, 'input-component');
			expect(Inputcomponent.length).toBe(1);
		});

		//when success is true, we want to make sure there is no input box or submit button
		test('Input box does not show', () => {
			//find the inputBox
			const inputBox = findByTestArr(wrapper, 'input-box');
			//expect the input box not to show
			expect(inputBox.exists()).toBe(false);
		});

		//test to  make sure submit button does not show when success is true
		test('Submit does not show', () => {
			//find submit button
			const submitButton = findByTestArr(wrapper, 'submit-button');
			expect(submitButton.exists()).toBe(false);
		});
	});

	describe('success is false', () => {
		let wrapper;
		beforeEach(() => {
			//this set success to be true
			wrapper = setup(false);
		});
		test('Input component renders without errors', () => {
			const Inputcomponent = findByTestArr(wrapper, 'input-component');
			expect(Inputcomponent.length).toBe(1);
		});

		//when success is true, we want to make sure there is no input box or submit button
		test('Input box shows', () => {
			//find the inputBox
			const inputBox = findByTestArr(wrapper, 'input-box');
			//expect the input box not to show
			expect(inputBox.exists()).toBe(true);
		});

		//test to  make sure submit button does not show when success is true
		test('Submit to shows', () => {
			//find submit button
			const submitButton = findByTestArr(wrapper, 'submit-button');
			expect(submitButton.exists()).toBe(true);
		});
	});
});
