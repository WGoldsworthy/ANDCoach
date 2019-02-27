import React from 'react';

const ObjectiveForm = (props) => {
  return(
    <form onSubmit={props.formSubmit}>
      <div className="input-container">
        <label>Title* </label>
        <div className="input-holder">
          <input required type="text" name="Test" onChange={props.titleChange}/>
        </div>
      </div>
      <div className="input-container">
        <label>Description* </label>
        <div className="input-holder">
          <textarea required rows="6" desc="this is description" onChange={props.descChange}/>
        </div>
      </div>
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default ObjectiveForm;