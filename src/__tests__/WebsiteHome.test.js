import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsiteHome } from 'components';
import { store } from 'App';
import { Link } from 'react-router';
import Slider from 'react-slick';

import {
  Marvel,
  Integration,
  Swivelscreen,
  Sw1,
  Sw2,
  Sw3,
  Sw4,
  Lawsikho,
  Stagephod,
  Userc,
  Userr,
  Carpathy


} from 'img';

// Snapshot for WebsiteHome React Component
describe('>>>H O M E   --- Snapshot',()=>{
    it('+++capturing Snapshot of wEBSITE home', () => {
        const renderedValue =  renderer.create(<WebsiteHome store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
