import React, { Component } from 'react';
import NoteCard from './NoteCard.js';
import UserDetails from '../UserDetails/UserDetails.js';

class NotesPage extends Component {
  state = {

  }
  render() {
    return (
      <div className='ObjectivesPage'>
        <UserDetails />
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
