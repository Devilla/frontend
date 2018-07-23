import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { Affiliate } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>>Affiliate --- Snapshot',()=>{
    it('+++capturing Snapshot of Affiliate', () => {
        const renderedValue =  renderer.create(<Affiliate store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<Affiliate  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<Affiliate  store={store}/>);
    expect(wrapper.find('.container').length).toBe(4);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<Affiliate  store={store}/>);
    expect(wrapper.find('.block').length).toBe(3);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<Affiliate  store={store}/>);
    expect(wrapper.find('.btn').length).toBe(1);
  });

})
