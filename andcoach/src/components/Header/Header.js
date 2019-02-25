import React, { Component } from 'react';

class Header extends Component {
  state = {
    name: 'Name Name',
    profilePic: 'https://via.placeholder.com/150'
  }
  render() {
    return (
        <div className='Header'>
            <div className='Logo'>
              <img height='100px' src={require('./AND_LOGO_RGB_ON_WHITE.webp')}/>
              <br />Coach
            </div>
            <p>
            <a class='Header' href="">Objectives</a>
            <a class='Header' href="">Meeting Notes</a>
            <a class='Header' href=''>Log Out</a> </p>
        </div>
    );
  }
}

export default Header;
