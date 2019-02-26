import React from 'react';
import ObjectiveForm from '../Forms/ObjectiveForm';

const modal = (props) => {
  return(
    <div className="modal">
      <div className="modal-content">
        <span
          className="close-icon"
          onClick={props.modalQuit} >
        </span>
        <ObjectiveForm/>
      </div>
    </div>
  );
}

export default modal;