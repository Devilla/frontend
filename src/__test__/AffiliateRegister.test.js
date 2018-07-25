import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { AffiliateRegister } from 'components';
import { store } from 'App';
import '../setupTests';

// Snapshot for Terms React Component
describe('>>>T E R M S --- Snapshot',()=>{
  it('+++capturing Snapshot of terms', () => {
    const renderedValue =  renderer.create(<AffiliateRegister store={store} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

});

describe('+++ test for the website pricing component', () => {
  let wrapper;
  beforeEach ( () => {
    wrapper = shallow(<AffiliateRegister store={store}/>);
  });


  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains website - content', () => {
    let wrapper = shallow(<AffiliateRegister  store={store}/>);
    expect(wrapper.find('.contect').length).toBe(0);
  });



  it('+++ contains website - input', () => {
    let wrapper = shallow(<AffiliateRegister  store={store}/>);
    expect(wrapper.find('input').length).toBe(0);
  });

  it('+++ contains website - image', () => {
    let wrapper = shallow(<AffiliateRegister  store={store}/>);
    expect(wrapper.find('img').length).toBe(0);
  });

  it('+++ contains website - button', () => {
    let wrapper = shallow(<AffiliateRegister  store={store}/>);
    expect(wrapper.find('button').length).toBe(0);
  });
});


