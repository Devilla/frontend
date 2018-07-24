import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { WebsiteTerms } from 'components';
import { store } from 'App';


// Snapshot for Terms React Component
describe('>>>T E R M S --- Snapshot',()=>{
    it('+++capturing Snapshot of terms', () => {
        const renderedValue =  renderer.create(<WebsiteTerms store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
