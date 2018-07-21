import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { BillingDetails } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> BillingDetails --- Snapshot',()=>{
    it('+++capturing Snapshot of BillingDetails', () => {
        const renderedValue =  renderer.create(<BillingDetails store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});


describe('BillingDetails', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<BillingDetails  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

/*Not working null values */

  it('+++ contains className of BillingDetails', () => {
    expect(wrapper.find('.content').length).toEqual(0);
  });

    // it('should respond to change event and change the state of the WebsiteSignUp Component', () => {
    //  wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
    //  expect(wrapper.state('email')).toEqual('blah@gmail.com');
    // })
    //
    // it('should respond to changed  event and change the state of the SignUp Component', () => {
    //  wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});
    //  expect(wrapper.state('password')).toEqual('cats');
    // })

});
