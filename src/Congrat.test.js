import { shallow } from 'enzyme';
import { findByTestArr } from '../test/test.utils';
import Congrat from './Congrat';
import { checkProps } from '../test/test.utils';

//We decided to leave the setup here instead of doing it in util because we need to pass a props to it
const setup = (props = {}) => {
	return shallow(<Congrat {...props} />);
};

test('renders without errors', () => {
	const wrapper = setup();
	const component = findByTestArr(wrapper, 'components-congrats');
	expect(component.length).toBe(1);
});

test('no success message when props is false', () => {
	const wrapper = setup({ success: false });
	const component = findByTestArr(wrapper, 'components-congrats');
	expect(component.text()).toBe('');
});

test('success message when props is true', () => {
	const wrapper = setup({ success: true });
	const component = findByTestArr(wrapper, 'congrat-message');
	expect(component.text().length).not.toBe('0');
});

test('does not through warning with expected props', () => {
	const expectedProps = { success: true };
	checkProps(Congrat, expectedProps);
});
