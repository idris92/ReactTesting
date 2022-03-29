import moxios from 'moxios';
import { getSecretWord, correctGuess, actionTypes } from './';

//testing the action of the correctGuess
describe('corrections', ()=>{
    test('return an action with type CORRECT GUESS', ()=>{
        const action = correctGuess();
        expect(action).toStrictEqual({
            type:actionTypes.CORRECT_GUESS
        });
        //Note if you use toBe, it will through an error
        //if you are delaing with immutable types like an object or arrray you use
        //toStrictEqual(deep equal) instead of toBe
    })
})

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
