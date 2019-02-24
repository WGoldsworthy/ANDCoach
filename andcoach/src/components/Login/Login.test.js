import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('should render login button', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.length).toBe(1);
  });
});