import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { NewCampaignContainer } from 'containers';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> NewCampaignContainer --- Snapshot',()=>{
    it('+++capturing Snapshot of NewCampaignContainer', () => {
        const renderedValue =  renderer.create(<NewCampaignContainer store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});
