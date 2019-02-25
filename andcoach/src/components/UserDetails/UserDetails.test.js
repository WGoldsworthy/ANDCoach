import React from 'react';
import { shallow } from 'enzyme';
import UserDetails from '../../App';

describe('<UserDetails/>', () => {
  it('should render user details widget', () => {
    const wrapper = shallow(<UserDetails />)
    expect(wrapper.length).toBe(1);
  });
});

// const wrapper = shallow(UserDetails />)
// expect(wrapper.props().loggedIn).toBeFalsy();