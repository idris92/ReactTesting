import { shallow } from 'enzyme';
import { findByTestArr } from '../test/test.utils';
import GuessedWords from './GuessedWords';

// We decided to leave the setup here instead of doing it in util because we need to pass a props to it
const setup = (props = {}) => {
	return shallow(<GuessedWords {...props} />);
};


test('check for no error', ()=>{
    const wrapper=setup();
    const components=findByTestArr(wrapper,'guessed');
    expect(components.length).toBe(1);
})

describe("if there are no words guessed", ()=>{
    test('run without an error', ()=>{

    });

    test('renders instructions to guess a word', ()=>{

    });

})

describe("if there are words guessed", ()=>{

})