import React, { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import NoteModal from '../Modal/NoteModal';
// import axios from 'axios';

class ObjectivesContent extends Component {

  state = {
    showNoteModal: false,
    noteTitleValue: '',
    noteDescValue: '',
    noteTitleUpdateVal: '',
    noteDescUpdateVal: '',
    noteDate: ''
  }

  addClickHandler = () => {
    this.setState({
      showNoteModal: true
    });
  }

  closeNoteModalClickHandler = () => {
    this.setState({showNoteModal: false})
  }

  noteTitleChangeHandler = (event) => {
    this.setState({
      noteTitleValue: event.target.value
    });
  }

  noteDescChangeHandler = (event) => {
    this.setState({
      noteDescValue: event.target.value
    });
  }

  noteSubmitHandler = (event) => {
    event.preventDefault();
    const noteTitle = this.state.noteTitleValue;
    const noteDescription = this.state.noteDescValue;
    this.setState({
      showNoteModal: false,
      noteTitleUpdateVal: noteTitle,
      noteDescUpdateVal: noteDescription,
      noteDate: 'some/date/here'
    });
    console.log(this.state.noteTitleUpdateVal);
  }

  render() {
    const noteModal = this.state.showNoteModal;
    return (
      <div className="objectives-section">
        <div className='objectives-page-header'>
          <h1>Your Notes</h1>
        </div>
        <button
          className="add"
          onClick={this.addClickHandler}>
        </button>
        <div className="objectives-list">
          <NoteCard 
            date={this.state.noteDate}
            title={this.state.noteTitleUpdateVal}
            desc={this.state.noteDescUpdateVal}/>
        </div>
        {noteModal ? 
          <NoteModal 
            closeNoteModal={this.closeNoteModalClickHandler}
            updateNoteTitle={this.noteTitleChangeHandler}
            updateNoteDesc={this.noteDescChangeHandler}
            submitNoteForm={this.noteSubmitHandler}/> : null
        }
      </div>
    );
  };
}

export default ObjectivesContent;