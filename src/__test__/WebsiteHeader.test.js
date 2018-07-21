import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsiteHeader } from 'components';
import { store } from 'App';
import { Link } from 'react-router';
import { LogoInfluence } from 'img';

// Snapshot for website header React Component
describe('>>>H E A D E R  --- Snapshot',()=>{
    it('+++capturing Snapshot of header', () => {
        const renderedValue =  renderer.create(<WebsiteHeader store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
