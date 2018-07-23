import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { AnalyticsContainer } from 'containers';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> AnalyticsContainer --- Snapshot',()=>{
    it('+++capturing Snapshot of AnalyticsContainer', () => {
        const renderedValue =  renderer.create(<AnalyticsContainer store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<AnalyticsContainer  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });


  it('+++ contains website - error', () => {
    let wrapper = shallow(<AnalyticsContainer  store={store}/>);
    expect(wrapper.find('.website-error').length).toBe(0);
  });

  it('+++ contains website - analytics', () => {
    let wrapper = shallow(<AnalyticsContainer  store={store}/>);
    expect(wrapper.find('td').length).toBe(0);
  });

});
