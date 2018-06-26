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
    });

})
  