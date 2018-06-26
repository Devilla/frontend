import React from 'react'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer'
import { UpgradeCard } from 'components';
import { store } from 'App';
import { CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    PostalCodeElement,
    injectStripe
  } from 'react-stripe-elements';

// Snapshot for website feature React Component
describe('>>>U P G R A D E C A R D   --- Snapshot',()=>{
    it('+++capturing Snapshot of upgrade card ', () => {
        const renderedValue =  renderer.create(<UpgradeCard store={store} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
