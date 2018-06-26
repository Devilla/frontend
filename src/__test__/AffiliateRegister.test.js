import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { AffiliateRegister } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> AffiliateRegister --- Snapshot',()=>{
    it('+++capturing Snapshot of AffiliateRegister', () => {
        const renderedValue =  renderer.create(<AffiliateRegister store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('>>>AffiliateRegister --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<AffiliateRegister store={store}/>)

    })

    it('+++ render the AffiliateRegister component', () => {
       expect(wrapper.length).toEqual(1)
});

it('+++ contains input1', () => {
        expect(wrapper.find('input').at(0)
                .equals(<input className="ml-0 validate-required"  type="text" placeholder="First / Last Name" name="name"></input>))
                .toBe(true)
});

it('+++ contains input2', () => {
        expect(wrapper.find('input').at(1)
                .equals(<input className="ml-0 validate-required" type="email" placeholder="you@something.com" name="email"></input>))
                .toBe(true)
});

it('+++ contains button with id="affiliatesubmit"', () => {
        expect(wrapper.find('button#affiliatesubmit').type()).toEqual('button')
});
});
