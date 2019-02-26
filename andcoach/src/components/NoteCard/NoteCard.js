import React, { Component } from 'react';

class NoteCard extends Component {
  state = {
    title: 'Note title',
    body: 'Note body body body',
    date: '19/02/20'
  }
  render() {
    return (
      <li className = 'NoteDetails'>
        <div>
          <h3>{this.state.date}</h3>
          <h2>{this.state.title}</h2>
          <h3>{this.state.body}</h3>
        </div>
      </li>
    );
  }
}

export default NoteCard;
