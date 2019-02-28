import React, { Component } from 'react';
import NotesContent from '../NotesContent/NotesContent';
import UserDetails from '../UserDetails/UserDetails.js';

class NotesPage extends Component {
  state = {

  }
  render() {
    return (
      <div className="profile-content container">
        <UserDetails 
        uName={this.props.uName}
        uPic={this.props.uPic}
        uEmail={this.props.uEmail}
        />
        <NotesContent/>
      </div>
    );
  }
}

export default NotesPage;
