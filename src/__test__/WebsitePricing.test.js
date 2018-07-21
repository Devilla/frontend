import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsitePricing } from 'components';
import { store } from 'App';


// Snapshot for WebsitePricing React Component
describe('>>>P R I C I N G --- Snapshot',()=>{
    it('+++capturing Snapshot of pricing', () => {
        const renderedValue =  renderer.create(<WebsitePricing store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
