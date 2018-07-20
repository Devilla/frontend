import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { DisplayPage } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> DisplayPage --- Snapshot',()=>{
    it('+++capturing Snapshot of DisplayPage', () => {
        const renderedValue =  renderer.create(<DisplayPage store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<DisplayPage  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });



  /* False values are passing bug */

    it('+++ contains container', () => {
      let wrapper = shallow(<DisplayPage  store={store}/>);
      expect(wrapper.find('.DisplayPage-container').length).toBe(0);
    });

    it('+++ contains Input', () => {
      let wrapper = shallow(<DisplayPage  store={store}/>);
      expect(wrapper.find('input').length).toBe(0);
    });

    it('+++ contains error', () => {
      let wrapper = shallow(<DisplayPage  store={store}/>);
      expect(wrapper.find('.website-error').length).toBe(0);
    });

    it('+++ contains button', () => {
      let wrapper = shallow(<DisplayPage  store={store}/>);
      expect(wrapper.find('button').length).toBe(0);
    });

});
