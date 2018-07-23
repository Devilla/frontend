import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { PricePage } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> PricePage --- Snapshot',()=>{
    it('+++capturing Snapshot of PricePage', () => {
        const renderedValue =  renderer.create(<PricePage store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});


describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<PricePage  store={store}/>);
  })

it('+++ contains website - PricePage', () => {
  let wrapper = shallow(<PricePage  store={store}/>);
  expect(wrapper.find('.price').length).toBe(0);
});

it('+++ contains website - PricePage', () => {
  let wrapper = shallow(<PricePage  store={store}/>);
  expect(wrapper.find('.pricingTable').length).toBe(0);
});

it('+++ contains website - PricePage', () => {
  let wrapper = shallow(<PricePage  store={store}/>);
  expect(wrapper.find('.pricing-content').length).toBe(0);
});

})
