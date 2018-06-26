import React from 'react'
import { shallow, mount, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
// import Adapter from 'enzyme-adapter-react-15';


import { loginSuccess } from 'ducks/auth';
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { validateEmail, validatePassword, login, PASSWORD_MAX_LENGTH } from 'services/FormUtils';
import { WebsiteSignIn } from 'components';
import { store } from 'App';

// 
// configure({ adapter: new Adapter() });

// Snapshot for Home React Component
describe('>>>H O M E --- Snapshot',()=>{
    it('+++capturing Snapshot of Home', () => {
        const renderedValue =  renderer.create(<WebsiteSignIn store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

// describe('Email input', () => {
//
//     it('should respond to change event and change the state of the WebsiteSignIn Component', () => {
//
//      const wrapper = shallow(<WebsiteSignIn />);
//      wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
//
//     expect(wrapper.state('email')).toEqual('blah@gmail.com');
//     })
//    })
//
//    describe('Password input', () => {
//
//     it('should respond to change event and change the state of the Login Component', () => {
//
//      const wrapper = shallow(<WebsiteSignIn />);
//      wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});
//
//      expect(wrapper.state('password')).toEqual('cats');
//     })
//    })
