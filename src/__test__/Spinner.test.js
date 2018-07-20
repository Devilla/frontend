import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { Spinner } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> Spinner --- Snapshot',()=>{
    it('+++capturing Snapshot of Spinner', () => {
        const renderedValue =  renderer.create(<Spinner store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});


describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<Spinner  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains loader - rect', () => {
    let wrapper = shallow(<Spinner  store={store}/>);
    expect(wrapper.find('.sk-wave').length).toBe(1);
  });

})
