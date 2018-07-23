import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';

import { WebsiteSignUp } from 'components';
import { store } from 'App';



// Snapshot for SignUp React Component
describe('>>>SignUp --- Snapshot',()=>{
  it('+++capturing Snapshot of SignUp', () => {
    const renderedValue =  renderer.create(<WebsiteSignUp store={store} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('check for in', ()=> {
  let wrapper;
  beforeEach ( () => {
       wrapper = shallow(<WebsiteSignUp  store={store}/>);
  })
  
  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
  
  
  it('+++ contains website - error', () => {
    let wrapper = shallow(<WebsiteSignUp  store={store}/>);
    expect(wrapper.find('.website-error').length).toBe(4);
  });

  //This condition should get pass to the state 
    it('should respond to change event and change the state of the WebsiteSignUp Component', () => {
     wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
     expect(wrapper.state('email')).toEqual('blah@gmail.com');
    })
  
    it('should respond to changed  event and change the state of the SignUp Component', () => {
     wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});
     expect(wrapper.state('password')).toEqual('cats');
    })


    //This condition should not get pass to the state.
    it('should respond to change event and change the state of the WebsiteSignUp Component', () => {
      wrapper.find('#email').simulate('change', {target: {name: 'email', value: '12121$gmail.com'}});
      expect(wrapper.state('email')).toEqual('12121$gmail.com');
     })
   
     it('should respond to changed  event and change the state of the SignUp Component', () => {
      wrapper.find('#password').simulate('change', {target: {name: 'password', value: '-----'}});
      expect(wrapper.state('password')).toEqual('-----');
     })
 
})