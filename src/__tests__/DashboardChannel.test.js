import React from 'react';
import '../setupTests';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { loginSuccess } from 'ducks/auth';
import {createStore} from 'redux';
import { load, loaded } from 'ducks/loading';
import { validateEmail, validatePassword, login, PASSWORD_MAX_LENGTH } from 'services/FormUtils';
import { DashboardChannel } from 'components';
import { store } from 'App';


// Snapshot for DashboardChannel React Component
describe('>>>DashboardChannel --- Snapshot',()=>{
  it('+++capturing Snapshot of Home', () => {
    const renderedValue =  renderer.create(<DashboardChannel store={store} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

});

// within the Login components describe function

describe('Email input', () => {
  let wrapper;
  beforeEach ( () => {
    wrapper = shallow(<DashboardChannel store={store}/>);
  });


  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  // it('should respond to change event and change the state of the DashboardChannel Component', () => {
  //   wrapper.find('#emails').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
  //   expect(wrapper.state('email')).toEqual('blah@gmail.com');
  // });


});
