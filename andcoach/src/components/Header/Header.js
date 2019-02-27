import React, { Component } from 'react';
import Nav from './Nav';
import Logo from '../../assets/images/logo-white-horizontal.png';
import { NavLink } from 'react-router-dom'


class Header extends Component {
  state = {
   menuItems: [
    // {title: 'Objectives'},
    // {title: 'Meeting Notes'}
    ],
  }

  render() {
    return (
      <div className='Header'>
        <div className='Logo'>
          <img src = {Logo} alt='logo'/>
        </div>
        {this.state.menuItems.map((navItem, index) => {
          return <Nav 
            name={navItem.title}
            key={index}
            />
          })}
          <li>
            <NavLink to="/objectives" activeStyle={{ color: '#2897FF' }} activeClassName="active">Objectives</NavLink>
          </li>
          <li>
            <NavLink to="/notes" activeStyle={{ color: '#2897FF' }} activeClassName="active">Notes</NavLink>
          </li>
      </div>
    );
  }
}

export default Header;
