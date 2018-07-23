import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsiteAbout } from 'components';
import { store } from 'App';

// Snapshot for website About React Component
describe('>>>A B O U T   --- Snapshot',()=>{
    it('+++capturing Snapshot of website About', () => {
        const renderedValue =  renderer.create(<WebsiteAbout store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
