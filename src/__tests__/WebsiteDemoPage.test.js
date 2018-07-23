import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsiteDemoPage } from 'components';
import { store } from 'App';


// Snapshot for website demo React Component
describe('>>>D E M O  P A  G E  --- Snapshot',()=>{
    it('+++capturing Snapshot of  customer demo page', () => {
        const renderedValue =  renderer.create(<WebsiteDemoPage store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
