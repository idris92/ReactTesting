//functional testing
import { mount } from 'enzyme';
import App from './App';
import { findByTestArr } from '../test/test.utils';

const setup = (state = {}) => {
	//we use mount instead of shallow because we are not testing in isolation, we are testing all
	//TODO: apply state
	const wrapper = mount(<App />);

	//add value to input box
	const inputBox = findByTestArr(wrapper, 'input-box');
	inputBox.simulate('change', { target: { value: 'train' } });

	// simulate click on submit button
	const submitButton = findByTestArr(wrapper, 'submit-button');
	submitButton.simulate('click', { preventDefault() {} });

	return wrapper;
};

describe.skip('no words guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: 'party',
			success: false,
			guessWords: []
		});
	});

	test('creates GuessWords table with one row(no word guessed', () => {
		const guessedWordRows = findByTestArr(wrapper, 'guessed-Word');
		expect(guessedWordRows).toHaveLength(1);
	});
});

describe.skip('some words guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: 'party',
			success: false,
			guessWords: [ { guessWord: 'agile', letterMatchCount: 1 } ]
		});
	});
	test('creates GuessWords table with two row', () => {
		const guessedWordRows = findByTestArr(wrapper, 'guessed-word');
		expect(guessedWordRows).toHaveLength(2);
	});
});
describe.skip('guessed secret word', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: 'party',
			success: false,
			guessWords: [ { guessWord: 'agile', letterMatchCount: 1 } ]
		});
	});
	//simulate an input
	const inputBox = findByTestArr(wrapper, 'input-box');
	const mockEvent = { target: { value: 'party' } };
	inputBox.simulate('change', mockEvent);
	//simulate a submit
	const submitButton = findByTestArr(wrapper, 'submit-button');
	submitButton.simulate('click', { preventDefault() {} });

	//test if row is added to table after simulation
	test('add rows to guessword table', () => {
		const guessWordNodes = findByTestArr(wrapper, 'guessed-word');
		expect(guessWordNodes).toHaveLength(3);
	});
	//display congratulations message
	test('displays congrat components', () => {
		const congrats = findByTestArr(wrapper, 'components-congrats');
		expect(congrats.text().length).toBeGreaterThan(0);
	});
	test('does not displays input components content', () => {
		const inputBoxComponent = findByTestArr(wrapper, 'input-box');
		expect(inputBoxComponent.exists()).toBe(false);

		const submitComponent = findByTestArr(wrapper, 'submit-button');
		expect(submitComponent.exists()).toBe(false);
	});
});
