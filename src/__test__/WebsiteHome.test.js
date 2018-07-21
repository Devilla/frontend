import React from 'react'
import '../setupTests';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
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
    it('+++capturing Snapshot of WEBSITE home', () => {
        const renderedValue =  renderer.create(<WebsiteHome store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});


describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<WebsiteHome  store={store}/>);
  })


  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteHome  store={store}/>);
    expect(wrapper.find('.website-error').length).toBe(0);
  });

  it('+++ contains website - input', () => {
    let wrapper = shallow(<WebsiteHome  store={store}/>);
    expect(wrapper.find('input').length).toBe(1);
  });

  it('+++ contains website - image', () => {
    let wrapper = shallow(<WebsiteHome  store={store}/>);
    expect(wrapper.find('img').length).toBe(8);
  });

  it('+++ contains website - button', () => {
    let wrapper = shallow(<WebsiteHome  store={store}/>);
    expect(wrapper.find('button').length).toBe(1);
  });

  });
