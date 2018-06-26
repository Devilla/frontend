import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { DisplayPage } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> DisplayPage --- Snapshot',()=>{
    it('+++capturing Snapshot of DisplayPage', () => {
        const renderedValue =  renderer.create(<DisplayPage store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});
