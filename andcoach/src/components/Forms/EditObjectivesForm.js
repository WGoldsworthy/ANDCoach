import React from 'react';

const ObjectiveForm = (props) => {
  return(
    <form onSubmit={props.formSave}>
      <div className="input-container">
        <label>Title </label>
        <div className="input-holder">
          <input type="text" onChange={props.changedTitle} value={props.titleValue}/>
          <span className="underline"></span>
        </div>
      </div>
      <div className="input-container">
        <label>Description</label>
        <div className="input-holder">
          <textarea rows="6" onChange={props.descChange} value={props.descValue}/>
          <span className="underline"></span>
        </div>
      </div>
      <button className="submit-btn">Save</button>
    </form>
  );
}

export default ObjectiveForm;