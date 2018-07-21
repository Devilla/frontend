import React from 'react'
import '../setupTests';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
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

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<WebsiteFeature  store={store}/>);
  })

  /*empty values */

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteFeature  store={store}/>);
    expect(wrapper.find('.website-error').length).toBe(0);
  });

    /*Original values */

  it('+++ contains website - input', () => {
    let wrapper = shallow(<WebsiteFeature  store={store}/>);
    expect(wrapper.find('img').length).toBe(4);
  });

  it('+++ contains website - button', () => {
    let wrapper = shallow(<WebsiteFeature  store={store}/>);
    expect(wrapper.find('button').length).toBe(0);
  });

  });
