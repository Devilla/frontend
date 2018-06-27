import React from 'react'
import '../setupTests';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
// import ConnectedHome,{Home} from '../src/js/components/Home'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import { loginSuccess } from 'ducks/auth';
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { validateEmail, validatePassword, login, PASSWORD_MAX_LENGTH } from 'services/FormUtils';
import { WebsiteSignIn } from 'components';
import { store } from 'App';


// Snapshot for Home React Component
describe('>>>H O M E --- Snapshot',()=>{
    it('+++capturing Snapshot of Home', () => {
        const renderedValue =  renderer.create(<WebsiteSignIn store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});

// within the Login components describe function

describe('Email input', () => {
    let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<WebsiteSignIn store={store}/>);
  })


  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
    })

  it('should respond to change event and change the state of the WebsiteSignIn Component', () => {
    wrapper.find('#emails').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
    expect(wrapper.state('email')).toEqual('blah@gmail.com');
   })

   it('should respond to changed  event and change the state of the SignUp Component', () => {
    wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});
    expect(wrapper.state('password')).toEqual('cats');
   })


   it('should stimulate the click event' ,() => {
    wrapper.find('#submit').simulate('click');
   })
 


  
})
  