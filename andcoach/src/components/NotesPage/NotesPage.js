import React, { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard.js';
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
        <div className='ObjectivesList'>
        Your Meeting Notes
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    );
  }
}

export default NotesPage;
