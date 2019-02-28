import React from 'react';


const ObjectiveForm = (props) => {
  return(
    <form onSubmit={props.formSubmit}>
      <div className="input-container">
        <label>Title* </label>
        <div className="input-holder">
          <input required type="text" name="title" onChange={props.titleChange}/>
          <span className="underline"></span>
        </div>
      </div>
      <div className="input-container">
        <label>Description* </label>
        <div className="input-holder">
          <textarea required rows="6" name="description" onChange={props.descChange}/>
          <span className="underline"></span>
        </div>
      </div>
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default ObjectiveForm;