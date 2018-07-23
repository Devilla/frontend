import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { Header } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> Header --- Snapshot',()=>{
    it('+++capturing Snapshot of Header', () => {
        const renderedValue =  renderer.create(<Header store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<Header  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

    /* Empty values received */

  it('+++ contains website - header', () => {
    let wrapper = shallow(<Header  store={store}/>);
    expect(wrapper.find('.customer-header').length).toBe(0);
  });

  it('+++ contains website - Header', () => {
    let wrapper = shallow(<Header  store={store}/>);
    expect(wrapper.find('.block').length).toBe(0);
  });

  it('+++ contains website - header', () => {
    let wrapper = shallow(<Header  store={store}/>);
    expect(wrapper.find('.btn').length).toBe(0);
  });

})
