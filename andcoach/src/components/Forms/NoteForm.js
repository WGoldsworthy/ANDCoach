import React from 'react';

const NoteForm = (props) => {
  return(
    <form onSubmit={props.noteFromSubmit}>
      <div className="input-container">
        <label>Description* </label>
        <div className="input-holder">
          <textarea required rows="6" name="NoteDescription" onChange={props.noteDescChange}/>
          <span className="underline"></span>
        </div>
      </div>
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default NoteForm;