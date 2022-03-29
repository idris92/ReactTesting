import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/reducers';
import { createStore } from 'redux';


export const storeFactory=(initialState)=>{
	return createStore(rootReducer, initialState)
}

//find by Attributes
//example const incrementButton = wrapper.find("[data-test='name']")
//writing the reusable code

export const findByTestArr = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`);
};

//utils for checking props type

export const checkProps = (component, conformingProps) => {
	//what we want to check is expectedProps from Congrat.propTypes, then you tell it we are testing properties, then the name of the component which is Congrat.name
	const propsError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
	expect(propsError).toBeUndefined();
};
