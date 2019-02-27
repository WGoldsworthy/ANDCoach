import React, { Component } from 'react';
import Nav from './Nav';
import Logo from '../../assets/images/logo.png';

class Header extends Component {
  state = {
   menuItems: [
    {title: 'Objectives'},
    {title: 'Meeting Notes'}],
  }


  render() {
    return (
      <div className="header">
      <div className="container header-content">
        <div className='logo'>
          <img src = {Logo} alt='logo'/>
        </div>
        <ul className="nav">
          {this.state.menuItems.map((navItem, index) => {
            return <Nav 
              name={navItem.title}
              key={index}
              />
          })}
        </ul>
      </div>
    </div>
    );
  }
}

export default Header;
