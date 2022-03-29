//to make sure useEffect is running we will be using mount not shallow
import { mount } from 'enzyme';
import { findByTestArr, storeFactory } from '../test/test.utils';
import App from './App';
import { Provider } from 'react-redux';

//activate global mock to make sure getSecretWord doesnt make network call
//what this line is saying is, anywhere in the cause of your test, if you see this line being imported
//I want you to import from the mocks module instead.
jest.mock('./actions');

//try import get secretword to test the mock
import { getSecretWord as mockGetSecretWord } from './actions';

const setup = () => {
	const store = storeFactory();
	//use mount instead of shallow, because useEffect not called on shallow
	return mount(
		<Provider store={store}>
			<App />
		</Provider>
	);
};

test('renders without error', () => {
	const wrapper = setup();
	const appComponent = findByTestArr(wrapper, 'component-app');
	expect(appComponent).toHaveLength(1);
});

//Writing set secret word test

describe('get secret word', () => {
	beforeEach(() => {
		//clear the mock calls from previous tests
		mockGetSecretWord.mockClear();
	});
	test('getSecretWord on app mount', () => {
		const wrapper = setup();
		//toHaveBeenCalledTimes is used to check how many times a mock have been called
		expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
	});

	test('getSecretWord does not run on app update', () => {
		const wrapper = setup();
		mockGetSecretWord.mockClear();
		//to update out component
		wrapper.setProps();
		//then we chck if the useEffect is run on update
		expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
	});
});
