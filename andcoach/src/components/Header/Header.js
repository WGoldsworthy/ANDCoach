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
        </div>
    );
  }
}

export default Header;
