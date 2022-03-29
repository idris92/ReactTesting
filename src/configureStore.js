import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middlewares = [ReduxThunk];

//{} is the initial state
export default createStore(rootReducer, {}, applyMiddleware(...middlewares));