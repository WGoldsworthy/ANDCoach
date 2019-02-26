import React from 'react';

const ObjectiveForm = (props) => {
  return(
    <form onSubmit={props.formSubmit}>
      <div className="input-container">
        <label>Title* </label>
        <input required type="text" name="Test" onChange={props.titleChange}/>
      </div>
        <div className="input-container">
          <label>Description* </label>
          <textarea required rows="6" desc="this is description" onChange={props.descChange}/>
        </div>
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default ObjectiveForm;