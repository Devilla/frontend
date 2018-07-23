import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsiteHowItWorks } from 'components';
import { store } from 'App';
import { Link } from 'react-router';
import Slider from 'react-slick';
import {
  NewIntegrate,
  NewInstall,
  NewGoLive,
  NewAnalyze,
  Easiestsetup,
  Lawsikho,
  Carpathy
} from 'img';

// Snapshot for WebsiteHowItWorks React Component
describe('>>>H O W IT W  O R K S  --- Snapshot',()=>{
  it('+++capturing Snapshot of how it works', () => {
      const renderedValue =  renderer.create(<WebsiteHowItWorks store={store} />).toJSON()
      expect(renderedValue).toMatchSnapshot();
  });

});
