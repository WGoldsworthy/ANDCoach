import React from 'react';
import { shallow } from 'enzyme';

describe('<ObjectivesForm />', () => {
  it('should render title input', () => {
    const input = shallow(<input />);
    expect(input.length).toEqual(1);
  });

  it('should render description input', () => {
    const textarea = shallow(<textarea />);
    expect(textarea.length).toEqual(1);
  });
});