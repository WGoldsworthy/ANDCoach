import Enzyme from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './App';
import LoginContent from './components/Login/Login';

Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
});

describe('Login', () => {
  it('should login successfully', () => {
    const wrapper = shallow(<LoginContent />);
    expect(wrapper.props().loggedIn).toBeFalsy();
  });
});