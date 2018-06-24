import React from 'react';
import { shallow} from 'enzyme';
import { expect } from 'jest';
import WebsiteSignIn from './WebsiteSignIn';


test('<WebsiteSignIn/>', () => {
  it('should render one <WebsiteSignIn /> elements if not authenticated',() => {
    const wrapper = shallow(<WebsiteSignIn/>);
    expect(wrapper.find(WebsiteSignIn)).to.have.length(1);
  });
});
