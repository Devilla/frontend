import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { ForgetPassword } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> ForgetPassword --- Snapshot',()=>{
    it('+++capturing Snapshot of ForgetPassword', () => {
        const renderedValue =  renderer.create(<ForgetPassword store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<ForgetPassword  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  /* Empty values received */

  it('+++ containsforgetpassword-container', () => {
    let wrapper = shallow(<ForgetPassword  store={store}/>);
    expect(wrapper.find('.container').length).toBe(0);
  });

  it('+++ contains wrapper', () => {
    let wrapper = shallow(<ForgetPassword  store={store}/>);
    expect(wrapper.find('.wrapper').length).toBe(0);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<ForgetPassword  store={store}/>);
    expect(wrapper.find('.website-error').length).toBe(0);
  });

})
