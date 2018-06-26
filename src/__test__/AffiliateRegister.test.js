import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { AffiliateRegister } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> AffiliateRegister --- Snapshot',()=>{
    it('+++capturing Snapshot of AffiliateRegister', () => {
        const renderedValue =  renderer.create(<AffiliateRegister store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});
