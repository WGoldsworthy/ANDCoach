import React, { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import NoteModal from '../Modal/NoteModal';
import axios from 'axios';
import Cookies from "universal-cookie";

const cookies = new Cookies();

var nts = [];

class NotesContent extends Component {

  state = {
    showNoteModal: false,
    notes: nts,
    noteTitleValue: '',
    noteDescValue: '',
    noteTitleUpdateVal: '',
    noteDescUpdateVal: '',
    noteDate: ''
  }

  componentDidMount() {

    var searchString = './notes/notes/' + this.props.userId;
    var parent = this;

    axios.get(searchString).then(function(response) {
        nts = response.data.data;
        parent.setState({notes: nts})
    });
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

    var note = {
      body: noteDescription,
      user_id: cookies.get('userId')
    }

    var parent = this;

    axios.post('./notes/create', note)
      .then(function(response) {
        nts.push(response.data.note);
        parent.setState({
          showNoteModal: false,
          notes: nts
        });
    });
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
          {this.state.notes.map((noteItem, index) => {
            return <NoteCard
              date={noteItem.createdAt}
              desc={noteItem.body}
              key={index}/>
          })}
        </div>
        {noteModal ? 
          <NoteModal 
            closeNoteModal={this.closeNoteModalClickHandler}
            updateNoteDesc={this.noteDescChangeHandler}
            submitNoteForm={this.noteSubmitHandler}/> : null
        }
      </div>
    );
  };
}

export default NotesContent;