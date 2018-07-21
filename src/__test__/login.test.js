import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
// import Adapter from 'enzyme-adapter-react-15';


import { loginSuccess } from 'ducks/auth';
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { validateEmail, validatePassword, login, PASSWORD_MAX_LENGTH } from 'services/FormUtils';
import { WebsiteSignIn } from 'components';
import { store } from 'App';
import { base } from 'services/api';

// Snapshot for Home React Component
describe('>>>SignIn --- Snapshot',()=>{
  it('+++capturing Snapshot of SignIn', () => {
    const renderedValue =  renderer.create(<WebsiteSignIn store={store} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<WebsiteSignIn  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });


  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteSignIn  store={store}/>);
    expect(wrapper.find('.website-error').length).toBe(0);
  });

  /*Not rendering components correctly*/

 //  it('should respond to change event and change the state of the WebsiteSignIn Component', () => {
 //   wrapper.find('input').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
 //   expect(wrapper.state('email')).toEqual('blah@gmail.com');
 // });

    // it('should respond to change event and change the state of the WebsiteSignIn Component', () => {
    //  wrapper.find('input#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
    //  expect(wrapper.state('email')).toEqual('blah@gmail.com');
    // })

    // it('should respond to changed  event and change the state of the SignIn Component', () => {
    //  wrapper.find('input#password').simulate('change', {target: {name: 'password', value: 'cats'}});
    //  expect(wrapper.state('password')).toEqual('cats');
    // })

})
