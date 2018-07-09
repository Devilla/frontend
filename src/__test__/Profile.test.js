import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { Profile } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> Profile --- Snapshot',()=>{
    it('+++capturing Snapshot of Profile', () => {
        const renderedValue =  renderer.create(<Profile store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});
