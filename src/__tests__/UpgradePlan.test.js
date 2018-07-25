import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { UpgradePlan } from 'components';
import { store } from 'App';


// Snapshot for website feature React Component
describe('>>>U P G R A D E  P L A N  --- Snapshot',()=>{
    it('+++capturing Snapshot of upgrade plan', () => {
        const renderedValue =  renderer.create(<UpgradePlan store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
