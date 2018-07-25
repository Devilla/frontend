import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsiteFeature } from 'components';
import { store } from 'App';
import { Gdpr } from 'img';
import { Link } from 'react-router';

// Snapshot for website feature React Component
describe('>>>F E A T U R  E --- Snapshot',()=>{
    it('+++capturing Snapshot of feature', () => {
        const renderedValue =  renderer.create(<WebsiteFeature store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
