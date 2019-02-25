import React from 'react';
import { shallow } from 'enzyme';
import GoogleLogin from '../../App';

describe('<GoogleLogin/>', () => {
  it('should render login button', () => {
    const wrapper = shallow(<GoogleLogin />)
    expect(wrapper.length).toBe(1);
  });
});