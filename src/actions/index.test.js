import moxios from 'moxios';
import { getSecretWord } from './';

describe('get Secret Word', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});

	test('secret words is required', () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: 'party'
			});
		});
		return getSecretWord().then((secretWord) => {
			expect(secretWord).toBe('party');
		});
	});
});
