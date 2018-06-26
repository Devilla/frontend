import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { LoginFlow } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> LoginFlow --- Snapshot',()=>{
    it('+++capturing Snapshot of LoginFlow', () => {
        const renderedValue =  renderer.create(<LoginFlow store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});
