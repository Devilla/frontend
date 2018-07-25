import React from 'react'
import '../setupTests';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { WebsiteCustStory  } from 'components';
import { store } from 'App';


// Snapshot for website footer React Component
describe('>>> C U S T  S T O R Y    --- Snapshot',()=>{
    it('+++capturing Snapshot of customer story ', () => {
        const renderedValue =  renderer.create(<WebsiteCustStory store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<WebsiteCustStory  store={store}/>);
  })

  /*empty values */

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteCustStory  store={store}/>);
    expect(wrapper.find('.container').length).toBe(3);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteCustStory  store={store}/>);
    expect(wrapper.find('input').length).toBe(0);
  });

  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteCustStory  store={store}/>);
    expect(wrapper.find('textarea').length).toBe(0);
  });

  });
