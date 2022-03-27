import { shallow } from 'enzyme';
import { findByTestArr } from '../test/test.utils';
import GuessedWords from './GuessedWords';
import { checkProps } from '../test/test.utils';

//creating a default props
const defaultProps = {
	guessWords: [ { guessWord: 'train', letterMatchCount: 3 } ]
};

// We decided to leave the setup here instead of doing it in util because we need to pass a props to it
const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessedWords {...setupProps} />);
};

test('Does not throw warning with expected props', () => {
	checkProps(GuessedWords, defaultProps);
});

test('check for no error', () => {
	const wrapper = setup();
	const components = findByTestArr(wrapper, 'component-guessed-word');
	expect(components.length).toBe(1);
});

describe('if there are no words guessed', () => {
	//Note that the wrapper are used on both cases, so we can make it public and apply to all test in the describe using beforeEach
	//which execute the code for each test
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessWords: [] });
	});

	test('run without an error', () => {
		// const wrapper = setup({guessWords:[]});
		const components = findByTestArr(wrapper, 'component-guessed-word');
		expect(components.length).toBe(1);
	});

	test('renders instructions to guess a word', () => {
		const instructions = findByTestArr(wrapper, 'guest-instructions');
		expect(instructions.text().length).not.toBe(0);
	});
});

describe('if there are words guessed', () => {
	const guessWords = [
		{ guessWord: 'train', letterMatchCount: 3 },
		{ guessWord: 'agile', letterMatchCount: 1 },
		{ guessWord: 'party', letterMatchCount: 5 }
	];
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessWords });
	});
	test('run without an error', () => {
		const components = findByTestArr(wrapper, 'component-guessed-word');
		expect(components.length).toBe(1);
	});
	test('renders guessed word section', () => {
        const guessedWordsNode=findByTestArr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });
	test('correct number of guessed word', () => {
        const guessedWordsNodes=findByTestArr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessWords.length)
    });
});
