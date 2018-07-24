import React from 'react'
import '../setupTests';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
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


describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<WebsiteHeader  store={store}/>);
  })


  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteHeader  store={store}/>);
    expect(wrapper.find('.website-error').length).toBe(0);
  });

  it('+++ contains website - input', () => {
    let wrapper = shallow(<WebsiteHeader  store={store}/>);
    expect(wrapper.find('img').length).toBe(1);
  });

  it('+++ contains website - button', () => {
    let wrapper = shallow(<WebsiteHeader  store={store}/>);
    expect(wrapper.find('button').length).toBe(1);
  });

  });
