import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { VerificationPage } from 'components';
import { store } from 'App';

// Snapshot for verification page  React Component
describe('>>>V E R I F I C A T I O N   --- Snapshot',()=>{
    it('+++capturing Snapshot of VERIFICARION PAGE', () => {
        const renderedValue =  renderer.create(<VerificationPage store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
