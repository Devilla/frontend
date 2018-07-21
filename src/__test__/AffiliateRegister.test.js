import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { AffiliateRegister } from 'components';
import { store } from 'App';
import '../setupTests';


// Snapshot for Terms React Component
describe('>>>T E R M S --- Snapshot',()=>{
    it('+++capturing Snapshot of terms', () => {
        const renderedValue =  renderer.create(<AffiliateRegister store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});

describe("+++ test for the website pricing component", () => {
    let wrapper;
    beforeEach ( () => {
         wrapper = shallow(<AffiliateRegister store={store}/>);
    })


    it('+++ render the DUMB component', () => {
      expect(wrapper.length).toEqual(1)
      })

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
})

//
//
// it('+++ should respond to change event and change the state of the affiliate register Component', () => {
//     wrapper.find('input').simulate('change', {target: {name: 'name', value: 'JOHNDOE'}});
//     expect(wrapper.state('name')).toEqual('JOHNDOE');
//    })

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
// });
