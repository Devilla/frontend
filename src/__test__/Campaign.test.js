import React from 'react';
import '../setupTests';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { load, loaded } from 'ducks/loading';
import { Campaign } from 'components';
import { store } from 'App';
// Snapshot for Home React Component
describe('>>> Campaign --- Snapshot',()=>{
  it('+++capturing Snapshot of Campaign', () => {
    const renderedValue =  renderer.create(<Campaign store={store} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});


describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
    wrapper = shallow(<Campaign  store={store}/>);
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<Campaign  store={store}/>);
    expect(wrapper.find('.website-error').length).toBe(3);
  });

  it('+++ contains button', () => {
    let wrapper = shallow(<Campaign  store={store}/>);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('+++ contains input', () => {
    let wrapper = shallow(<Campaign  store={store}/>);
    expect(wrapper.find('input').length).toBe(3);
  });
  it('+++ contains Form', () => {
    let wrapper = shallow(<Campaign  store={store}/>);
    expect(wrapper.find('form').length).toBe(1);
  });


});