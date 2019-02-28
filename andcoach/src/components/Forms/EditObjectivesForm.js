import React from 'react';

const EditObjectivesForm = (props) => {
  return(
    <form onSubmit={props.formSubmit}>
      <div className="input-container">
        <label>Title </label>
        <div className="input-holder">
          <input 
            type="text" 
            onChange={props.changedTitle} 
            defaultValue={props.titleValue}/>
          <span className="underline"></span>
        </div>
      </div>
      <div className="input-container">
        <label>Description</label>
        <div className="input-holder">
          <textarea 
            rows="6" 
            onChange={props.descChange} 
            defaultValue={props.descValue}/>
          <span className="underline"></span>
        </div>
      </div>
      <button className="submit-btn">Save</button>
    </form>
  );
}

export default EditObjectivesForm;