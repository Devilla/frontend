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
});

});
