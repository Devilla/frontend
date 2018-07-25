import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { DashboardContainer } from 'containers';
import { store } from 'App';
import 'jest-localstorage-mock';

// Snapshot for Home React Component
describe('>>> DashboardContainer --- Snapshot',()=>{
  it('+++capturing Snapshot of DashboardContainer', () => {
    const renderedValue =  renderer.create(<DashboardContainer store={store} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
    wrapper = shallow(<DashboardContainer  store={store}/>);
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });


  it('+++ contains website - error', () => {
    let wrapper = shallow(<DashboardContainer  store={store}/>);
    expect(wrapper.find('.website-error').length).toBe(0);
  });
});