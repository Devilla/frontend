import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { NewCampaignContainer } from 'containers';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> NewCampaignContainer --- Snapshot',()=>{
    it('+++capturing Snapshot of NewCampaignContainer', () => {
        const renderedValue =  renderer.create(<NewCampaignContainer store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<NewCampaignContainer  store={store}/>);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });


  it('+++ contains website - error', () => {
    let wrapper = shallow(<NewCampaignContainer  store={store}/>);
    expect(wrapper.find('.website-error').length).toBe(0);
  });
});
