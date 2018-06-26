import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { forget } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> forget --- Snapshot',()=>{
    it('+++capturing Snapshot of forget', () => {
        const renderedValue =  renderer.create(<forget store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<forget  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });


  it('+++ contains website - error', () => {
    let wrapper = shallow(<forget  store={store}/>);
    expect(wrapper.find('.frmcntl').length).toBe(1);
  });
})
