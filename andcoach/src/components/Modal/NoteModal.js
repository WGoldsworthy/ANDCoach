import React from 'react';
import NoteForm from '../Forms/NoteForm';

const noteModal = (props) => {

  return(
    <div className="modal">
      <div className="modal-content">
        <span
          className="close-icon"
          onClick={props.closeNoteModal} >
        </span>
        <NoteForm 
          noteDescChange={props.updateNoteDesc}
          noteFromSubmit={props.submitNoteForm}/>
      </div>
    </div>
  );
}

export default noteModal;