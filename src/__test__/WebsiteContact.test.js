import React from 'react'
import '../setupTests';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { WebsiteContact } from 'components';
import { store } from 'App';

// Snapshot for website Contact React Component
describe('>>>C O N T A C T   --- Snapshot',()=>{
    it('+++capturing Snapshot of website contact', () => {
        const renderedValue =  renderer.create(<WebsiteContact store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<WebsiteContact  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteContact  store={store}/>);
    expect(wrapper.find('.container').length).toBe(0);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteContact  store={store}/>);
    expect(wrapper.find('input').length).toBe(0);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteContact  store={store}/>);
    expect(wrapper.find('textarea').length).toBe(0);
  });

})
