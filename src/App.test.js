import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders non-empty without crashing', () => {
	const wrapper = shallow(<App />);
	// console.log(wrapper.debug());
	//checking if the wrapper contain a node
	// expect (wrapper.exists()).toBe(true);
	//This will look for all node with data-test name of component-app 
	const appComponent = wrapper.find("[data-test='component-app']");
  //this expected 1 or more data in the appComponent
  expect(appComponent.length).toBe(1)
});

test('renders Increment button', () => {
	const wrapper = shallow(<App />);
	const buttonComponent = wrapper.find("[data-test='increment-button']");
	expect(buttonComponent.length).toBe(1)
});

test('renders counter display', () => {
	const wrapper = shallow(<App />);
	const counterComponent = wrapper.find("[data-test='counter-display']");
	expect(counterComponent.length).toBe(1)
});

test('counter display start at zero', () => {
	const wrapper = shallow(<App/>);
	const count = wrapper.find("[data-test='count']").text();
	expect(count).toBe("0")
});

test('click button increment counter', () => {
	const wrapper = shallow(<App/>);
	//find the button
	const incrementButton = wrapper.find("[data-test='increment-button']");
	//click the button
	incrementButton.simulate('click')
	//find the display and check that the number has been incremented
	const count = wrapper.find("[data-test='count']").text();
	expect(count).toBe('1')
});

test('click button decrement counter', ()=>{
	const wrapper = shallow(<App/>);
	//get the button
	const decrementButton=wrapper.find("[data-test='decrement-button']");
	//click the button
	decrementButton.simulate('click');
	//get the counter
	const count = wrapper.find("[data-test='count']").text();
	expect(count).toBe('0');

})
test('test for decrement below zero and check for error message switch', ()=>{
	const wrapper=shallow(<App/>);
	//get the decrement button
	const decrementButton=wrapper.find("[data-test='decrement-button']");
	//simulate the button
	decrementButton.simulate('click');
	//check for error
	const errorTest=wrapper.find("[data-test='error']");
	expect(errorTest.length).toBe(1)
	
})

test('check for error close after the increment', ()=>{
	const wrapper=shallow(<App/>);
	//get the increment button
	const incrementButton=wrapper.find("[data-test='increment-button']");
	//simulate the button
	incrementButton.simulate('click');
	//check for error message
	const errorTest=wrapper.find("[data-test='error']");
	expect(errorTest.length).toBe(0);
})