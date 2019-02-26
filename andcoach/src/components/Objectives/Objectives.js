import React from 'react';
import Modal from '../Modal/Modal';

const objectives = (props) => {
  const modal = props.showModal;
  return(
    <div className="objectives-container">
      <span
        className="add"
        onClick={props.addClick}
        >
      </span>
      {modal ? 
        <Modal 
          modalQuit={props.closeClick}
          formSubmitted={props.formSubmit}
          formChanged={props.formChange}
          inputName={props.objName}/> : null
      }
    </div>
  );
}

export default objectives;