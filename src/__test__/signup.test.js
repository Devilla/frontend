import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { loginSuccess } from 'ducks/auth';
import {createStore} from 'redux';
import { load, loaded } from 'ducks/loading';
import { validateEmail, validatePassword, login, PASSWORD_MAX_LENGTH } from 'services/FormUtils';
import { WebsiteSignUp } from 'components';
import { store } from 'App';
import { base } from 'services/api';

// Snapshot for SignUp React Component
describe('>>>SignUp --- Snapshot',()=>{
  it('+++capturing Snapshot of SignUp', () => {
    const renderedValue =  renderer.create(<WebsiteSignUp store={store} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});