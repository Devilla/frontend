import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { CampaignSettings } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> CampaignSettings --- Snapshot',()=>{
    it('+++capturing Snapshot of CampaignSettings', () => {
        const renderedValue =  renderer.create(<CampaignSettings store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});
