import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { StatsCard } from 'components';
import { store } from 'App';
import '../setupTests';


// Snapshot for Terms React Component
describe('>>>T E R M S --- Snapshot',()=>{
    it('+++capturing Snapshot of terms', () => {
        const renderedValue =  renderer.create(<StatsCard store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});

describe("+++ test for the website pricing component", () => {
    let wrapper;
    beforeEach ( () => {
         wrapper = shallow(<StatsCard store={store}/>);
    })

/*Empty values received */

    it('+++ render the DUMB component', () => {
      expect(wrapper.length).toEqual(1)
      })

      it('+++ contains website - content', () => {
        let wrapper = shallow(<StatsCard  store={store}/>);
        expect(wrapper.find('.contect').length).toBe(0);
      });

      it('+++ contains website - numbers', () => {
        let wrapper = shallow(<StatsCard  store={store}/>);
        expect(wrapper.find('.numbers').length).toBe(1);
      });


      it('+++ contains website - footer', () => {
        let wrapper = shallow(<StatsCard  store={store}/>);
        expect(wrapper.find('.footer').length).toBe(1);
      });

      it('+++ contains website - stats', () => {
        let wrapper = shallow(<StatsCard  store={store}/>);
        expect(wrapper.find('.stats').length).toBe(1);
      });

      it('+++ contains website - input', () => {
        let wrapper = shallow(<StatsCard  store={store}/>);
        expect(wrapper.find('input').length).toBe(0);
      });

      it('+++ contains website - image', () => {
        let wrapper = shallow(<StatsCard  store={store}/>);
        expect(wrapper.find('img').length).toBe(0);
      });

      it('+++ contains website - button', () => {
        let wrapper = shallow(<StatsCard  store={store}/>);
        expect(wrapper.find('button').length).toBe(0);
      });
})
