import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsiteTerms } from 'components';
import { store } from 'App';
import '../setupTests';


// Snapshot for Terms React Component
describe('>>>T E R M S --- Snapshot',()=>{
    it('+++capturing Snapshot of terms', () => {
        const renderedValue =  renderer.create(<WebsiteTerms store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});

describe("+++ test for the website pricing component", () => {
    let wrapper;
    beforeEach ( () => {
         wrapper = shallow(<WebsiteTerms store={store}/>);
    })


    it('+++ render the DUMB component', () => {
      expect(wrapper.length).toEqual(1)
      })

      it('+++ contains website - container', () => {
        let wrapper = shallow(<WebsiteTerms  store={store}/>);
        expect(wrapper.find('.container').length).toBe(2);
      });

      it('+++ contains website - input', () => {
        let wrapper = shallow(<WebsiteTerms  store={store}/>);
        expect(wrapper.find('input').length).toBe(0);
      });

      it('+++ contains website - image', () => {
        let wrapper = shallow(<WebsiteTerms  store={store}/>);
        expect(wrapper.find('img').length).toBe(0);
      });

      it('+++ contains website - button', () => {
        let wrapper = shallow(<WebsiteTerms  store={store}/>);
        expect(wrapper.find('button').length).toBe(0);
      });
})
