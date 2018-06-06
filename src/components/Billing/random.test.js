import React from 'react'; 
import { shallow } from 'enzyme';

// import Billing from './Billing';

// import { validatePath } from 'components/Common/function';

// describe('<Billing />', () => {
//   it('renders Billing ' , () => {
//     const wrapper = shallow(<Billing />);
//     expect(wrapper.find('.Billing-container').length).to.equal(1);
//   });

// });



function validatePath(path){
    var re = /\//;  
    return re.test(path);
  }

  function validatewebsite(website){
    var re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    return re.test(website);
  }

  function validphone(phone){
    var re = /^(\+[\d]{1,5}|0)?[7-9]\d{9}$/;
    return re.test(phone);
  }

  function validateemail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function getCookie(cname) {
    const cookie = localStorage.getItem(cname);
    const authToken = cookie?JSON.parse(cookie):null;
    return authToken.token;
  }


test('Should be valid Path', ()=> {
    expect(validatePath('/register/signup')).toBe(true);
});

test('Should be valid Website', ()=> {
  expect(validatewebsite('/www.facebook.com')).toBe(true);
});

test('Should be valid Phone Number', ()=> {
  expect(validphone(9876543210)).toBe(true);
});

test('Should be valid Email Address', ()=> {
  expect(validateemail('com.devilla@f.com')).toBe(true);
});









