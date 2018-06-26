import React from 'react';
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
