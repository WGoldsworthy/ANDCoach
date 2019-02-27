import React, { Component } from 'react';
import Nav from './Nav';
import Logo from '../../assets/images/logo-white-horizontal.png';
import { NavLink } from 'react-router-dom'


class Header extends Component {
  state = {
   menuItems: [
    ],
  }

  render() {
    return (
      <div className='header'>
        <div className="container header-content">
          <div className='logo'>
            <img src = {Logo} alt='logo'/>
          </div>
          <ul className="nav">
              <li>
                <NavLink to="/objectives" activeStyle={{ color: '#2897FF' }} activeClassName="active">Objectives</NavLink>
              </li>
              <li>
                <NavLink to="/notes" activeStyle={{ color: '#2897FF' }} activeClassName="active">Notes</NavLink>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
