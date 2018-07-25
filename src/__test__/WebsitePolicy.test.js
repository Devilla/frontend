import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsitePolicy } from 'components';
import { store } from 'App';
import '../setupTests';

// Snapshot for WebsitePolicy React Component
describe('>>>P O L I C Y  --- Snapshot',()=>{
    it('+++capturing Snapshot of POLICY', () => {
        const renderedValue =  renderer.create(<WebsitePolicy store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});

describe("+++ test for the privacy policy component", () => {
    let wrapper;
    beforeEach ( () => {
         wrapper = shallow(<WebsitePolicy store={store}/>);
    })


    it('+++ render the DUMB component', () => {
      expect(wrapper.length).toEqual(1)
      })

      it('+++ contains website - error', () => {
        let wrapper = shallow(<WebsitePolicy  store={store}/>);
        expect(wrapper.find('.website-error').length).toBe(0);
      });

      it('+++ contains website - input', () => {
        let wrapper = shallow(<WebsitePolicy  store={store}/>);
        expect(wrapper.find('input').length).toBe(0);
      });

      it('+++ contains website - image', () => {
        let wrapper = shallow(<WebsitePolicy  store={store}/>);
        expect(wrapper.find('img').length).toBe(0);
      });

      it('+++ contains website - button', () => {
        let wrapper = shallow(<WebsitePolicy  store={store}/>);
        expect(wrapper.find('button').length).toBe(1);
      });
})
