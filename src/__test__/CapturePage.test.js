import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { CapturePage } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> CapturePage --- Snapshot',()=>{
    it('+++capturing Snapshot of CapturePage', () => {
        const renderedValue =  renderer.create(<CapturePage store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<CapturePage  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains Table', () => {
    let wrapper = shallow(<CapturePage  store={store}/>);
    expect(wrapper.find('.tabscontent').length).toBe(1);
  });

})
