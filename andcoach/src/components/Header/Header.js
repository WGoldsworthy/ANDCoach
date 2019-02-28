import React, { Component } from 'react';
import Logo from '../../assets/images/logo-white-horizontal.png';
import { NavLink } from 'react-router-dom'


class Header extends Component {

  render() {
    return (
      <div className='header'>
        <div className="container header-content">
          <div className='logo'>
            <img src = {Logo} alt='logo'/>
          </div>
          <ul className="nav">
              <li>
                <NavLink to="/objectives" activeClassName="active">Objectives</NavLink>
              </li>
              <li>
                <NavLink to="/notes" activeClassName="active">Notes</NavLink>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
