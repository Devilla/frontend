import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { load, loaded } from 'ducks/loading';
import { AffiliateRegister } from 'components';
import { store } from 'App';

// Snapshot for Home React Component
describe('>>> AffiliateRegister --- Snapshot',()=>{
    it('+++capturing Snapshot of AffiliateRegister', () => {
        const renderedValue =  renderer.create(<AffiliateRegister store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('>>>AffiliateRegister --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<AffiliateRegister store={store}/>)

    })

    it('+++ render the AffiliateRegister component', () => {
       expect(wrapper.length).toEqual(1)
}


it('+++ should respond to change event and change the state of the affiliate register Component', () => {
    wrapper.find('input').simulate('change', {target: {name: 'name', value: 'JOHNDOE'}});
    expect(wrapper.state('name')).toEqual('JOHNDOE');
   })

   // it('+++ should respond to change event and change the state of the affiliate register Component', () => {
   //  wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'JOHNDOE@gmail.com' }});
   //  expect(wrapper.state('email')).toEqual('JOHNDOE@gmail.com');
   // })


// it('+++ contains button with id="affiliatesubmit"', () => {
//         expect(wrapper.find('button#affiliatesubmit').type()).toEqual('button')
// });
//
//
//    it('should stimulate the click event' ,() => {
//     wrapper.find('#affiliatesubmit').simulate('click');
//    })
//
//    it("+++ fake dummy values for the affilate fields >>> should fail" ,() => {
//        wrapper.find('#name').simulate('change',{ target: {name: 'name', value: 12121}});
//        expect(wrapper.state('name')).toBe(12121);
//    })
//    it("+++ fake dummy values for the affilate fields >>> should fail" ,() => {
//     wrapper.find('#email').simulate('change',{ target: {name: 'email', value: '12121$gmail.com'}});
//     expect(wrapper.state('email')).toBe('12121$gmail.com');
// })
//
//
//
//
});
