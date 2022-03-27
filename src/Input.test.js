import { shallow } from 'enzyme';
import { findByTestArr } from '../test/test.utils';
import Input from './Input';
import { checkProps } from '../test/test.utils';

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
