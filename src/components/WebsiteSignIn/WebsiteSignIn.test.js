import React from 'react';
import {cofigure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter});

describe('<WebsiteSignIn/>', () => {
  it('should render one <WebsiteSignIn /> elements if not authenticated',() => {
    const wrapper = shallow(<WebsiteSignIn/>);
    expect(wrapper.find(WebsiteSignIn)).toHaveLength(1);
  });
});
