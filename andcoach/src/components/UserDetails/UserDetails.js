import React, { Component } from 'react';


class UserDetails extends Component {
  state = {
    name: 'Name Name',
    profilePic: 'https://via.placeholder.com/150'
  }
  render() {
    return (
        <div className='UserDetails'>
          {this.state.name}
          <img src={this.state.profilePic} />
        </div>
    );
  }
}

export default UserDetails;
