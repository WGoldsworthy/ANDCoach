import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../App';

describe('<Header/>', () => {
  it('should render page header', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.length).toBe(1);
  });
});
