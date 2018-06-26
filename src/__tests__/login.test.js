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
         wrapper = shallow(<WebsiteSignIn  store={store}/>);
    })

    // it('should respond to change event and change the state of the WebsiteSignIn Component', () => {
    //  wrapper.find('input').at(0).simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
    //  expect(wrapper.state('email')).toEqual('blah@gmail.com');
    // })
    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1)
    });
    it('+++ contains input1', () => {
        expect(wrapper.find('input').at(0)
                .equals( <input name="email"
                ref="email"
                className="field w-input"
                placeholder="Email Address"
                type="email"
                id="email"
              />))
                .toBe(true)
    });
//     it('+++ contains input2', () => {
//         expect(wrapper.find('input').at(1)
//                 .equals(<input type="text" placeholder="Input 2" ref="input2"></input>))
//                 .toBe(true)
// });

    
    // it('should respond to change event and change the state of the Login Component', () => {
    //  wrapper.find('input#password').simulate('change', {target: {name: 'password', value: 'cats'}});
    //  expect(wrapper.state('password')).toEqual('cats');
    // })

})
  