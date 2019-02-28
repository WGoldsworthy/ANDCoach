import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../Modal/Modal';


describe('<ObjectiveContent />', () => {
  it('should check the <button/> click event', () => {
    const mockCallBack = jest.fn();
    const addButton = shallow(<button onClick={mockCallBack}>Add</button>);
    addButton.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('should render <Modal/>', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find('.modal').length).toEqual(1);
  });
});