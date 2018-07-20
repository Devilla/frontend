import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { Error } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> Error --- Snapshot',()=>{
    it('+++capturing Snapshot of Error', () => {
        const renderedValue =  renderer.create(<Error store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<Error  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains unknown - error', () => {
    let wrapper = shallow(<Error  store={store}/>);
    expect(wrapper.find('.unknown-error').length).toBe(1);
  });

  it('+++ contains error_button - error', () => {
    let wrapper = shallow(<Error  store={store}/>);
    expect(wrapper.find('.error_button').length).toBe(1);
  });

  it('+++ contains error_head - error', () => {
    let wrapper = shallow(<Error  store={store}/>);
    expect(wrapper.find('.error_head').length).toBe(1);
  });

  it('+++ contains error_head - error', () => {
    let wrapper = shallow(<Error  store={store}/>);
    expect(wrapper.find('button').length).toBe(1);
  });


})
