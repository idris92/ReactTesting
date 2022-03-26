import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestArr } from '../test/test.utils';
import Congrat from './Congrat';
Enzyme.configure({ adapter: new EnzymeAdapter() });

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
