import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsiteIntegrations } from 'components';
import { store } from 'App';
import {
    Integrations1,
    NewRecentPurchases,
  
  } from 'img';

// Snapshot for WebsitePricing React Component
describe('>>>I N T E G R A T I O N S --- Snapshot',()=>{
    it('+++capturing Snapshot of integrations', () => {
        const renderedValue =  renderer.create(<WebsiteIntegrations store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
