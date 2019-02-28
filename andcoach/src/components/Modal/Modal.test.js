import React from 'react';
import { shallow } from 'enzyme';
import ObjectiveForm from '../Modal/Modal';

describe('<ObjectiveForm />', () => {
  it('should respond to input change event', () => {
    const input = shallow(<input value/>);
    input.simulate('change', {
      target: {
        value: true}
    });
    expect(input.props().value).toBe(true);    
  });
});