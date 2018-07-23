import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsiteContact } from 'components';
import { store } from 'App';

// Snapshot for website Contact React Component
describe('>>>C O N T A C T   --- Snapshot',()=>{
    it('+++capturing Snapshot of website contact', () => {
        const renderedValue =  renderer.create(<WebsiteContact store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
