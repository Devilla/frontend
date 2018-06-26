import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsitePolicy } from 'components';
import { store } from 'App';


// Snapshot for WebsitePolicy React Component
describe('>>>P O L I C Y  --- Snapshot',()=>{
    it('+++capturing Snapshot of POLICY', () => {
        const renderedValue =  renderer.create(<WebsitePolicy store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
