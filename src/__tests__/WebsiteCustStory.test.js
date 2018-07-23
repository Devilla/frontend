import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsiteCustStory  } from 'components';
import { store } from 'App';


// Snapshot for website footer React Component
describe('>>> C U S T  S T O R Y    --- Snapshot',()=>{
    it('+++capturing Snapshot of customer story ', () => {
        const renderedValue =  renderer.create(<WebsiteCustStory store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
