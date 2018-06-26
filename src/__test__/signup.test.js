import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { loginSuccess } from 'ducks/auth';
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { validateEmail, validatePassword, login, PASSWORD_MAX_LENGTH } from 'services/FormUtils';
import { WebsiteSignUp } from 'components';
import { store } from 'App';


// Snapshot for Home React Component
describe('>>>WebsiteSignUp --- Snapshot',()=>{
    it('+++capturing Snapshot of WebsiteSignUp', () => {
        const renderedValue =  renderer.create(<WebsiteSignUp store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});

// within the Login components describe function
