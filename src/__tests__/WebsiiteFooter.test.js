import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsiteFooter } from 'components';
import { store } from 'App';
import { Gdpr } from 'img';
import { Link } from 'react-router';

// Snapshot for website footer React Component
describe('>>>F O O T E R   --- Snapshot',()=>{
    it('+++capturing Snapshot of footer', () => {
        const renderedValue =  renderer.create(<WebsiteFooter store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
