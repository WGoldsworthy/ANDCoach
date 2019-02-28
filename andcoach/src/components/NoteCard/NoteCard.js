import React, { Component } from 'react';

class NoteCard extends Component {
  render() {
    return (
      <li className='objective-card'>
        <div className='objective-details'>
          <h3>{this.props.date}</h3>
          <h2>{this.props.title}</h2>
          <h3>{this.props.desc}</h3>
        </div>
      </li>
    );
  }
}

export default NoteCard;
