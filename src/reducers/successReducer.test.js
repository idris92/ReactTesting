import { actionTypes } from "../actions";
import successReducer from "./successReducer";


test('when previous state is undefined return false', ()=>{
    //since our reducer takes in state and action
    //we are giving the state an undefined
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});

test('return previous state when unknown action type', ()=>{
    const newState = successReducer(false, {type:'unknown'});
    //expect the newState to be what previous state is which is false
    expect(newState).toBe(false);

});

test('return true for action type correct guess', ()=>{
    const newState = successReducer(false, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
})  