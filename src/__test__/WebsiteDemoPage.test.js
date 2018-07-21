import React from 'react'
import '../setupTests';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { WebsiteDemoPage } from 'components';
import { store } from 'App';


// Snapshot for website demo React Component
describe('>>>D E M O  P A  G E  --- Snapshot',()=>{
    it('+++capturing Snapshot of  customer demo page', () => {
        const renderedValue =  renderer.create(<WebsiteDemoPage store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<WebsiteDemoPage  store={store}/>);
  })

  /*empty values */

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });


  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteDemoPage  store={store}/>);
    expect(wrapper.find('.website-error').length).not.toBe(null);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteDemoPage  store={store}/>);
    expect(wrapper.find('.website-error').length).toBe(0);
  });

  it('+++ contains website - input', () => {
    let wrapper = shallow(<WebsiteDemoPage  store={store}/>);
    expect(wrapper.find('input').length).toBe(0);
  });

  it('+++ contains website - button', () => {
    let wrapper = shallow(<WebsiteDemoPage  store={store}/>);
    expect(wrapper.find('button').length).toBe(0);
  });

  });
