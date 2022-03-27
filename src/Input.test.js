import { shallow } from 'enzyme';
import { findByTestArr } from '../test/test.utils';
import Input from './Input';
import { checkProps } from '../test/test.utils';
import React from 'react';

//We decided to leave the setup here instead of doing it in util because we need to pass a props to it
const setup = () => {
	return shallow(<Input />);
};

test('renders without errors', () => {
	const wrapper = setup();
	const Inputcomponent = findByTestArr(wrapper, 'input-component');
	expect(Inputcomponent.length).toBe(1);
});

test('does not through warning with expected props', () => {
	const expectedProps = { guessWord: 'truth' };
	checkProps(Input, expectedProps);
});
describe("state controlled input field", ()=>{
    test('state updates with value of input box upon change', ()=>{
        //created a mock function
        const mockSetCurentGuess = jest.fn();
        //created a mock state
        React.useState=jest.fn(()=>['', mockSetCurentGuess])

        const wrapper=setup();
        const inputBox=findByTestArr(wrapper, 'input-box')

        //created a mock event
        const mockEvent={target:{value:'train'}};

        //then we simulate a chnge on the inputBox
        //this simulate an inputBox getting a value of train
        inputBox.simulate('change',mockEvent);
        
        expect(mockSetCurentGuess).toHaveBeenCalledWith('train')
    })
})
