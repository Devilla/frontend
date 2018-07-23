import React from 'react'
import '../setupTests';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
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

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<WebsiteHowItWorks  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteHowItWorks  store={store}/>);
    expect(wrapper.find('.website-error').length).toBe(0);
  });

  it('+++ contains website - input', () => {
    let wrapper = shallow(<WebsiteHowItWorks  store={store}/>);
    expect(wrapper.find('input').length).toBe(0);
  });

  it('+++ contains website - image', () => {
    let wrapper = shallow(<WebsiteHowItWorks  store={store}/>);
    expect(wrapper.find('img').length).toBe(8);
  });

  it('+++ contains website - button', () => {
    let wrapper = shallow(<WebsiteHowItWorks  store={store}/>);
    expect(wrapper.find('button').length).toBe(0);
  });
  });
