import React from 'react';
import ObjectiveForm from '../Forms/ObjectiveForm';
import EditObjectivesForm from '../Forms/EditObjectivesForm';

const modal = (props) => {
  const newObjForm = props.newObj;
  const editObjForm = props.editObj;
  return(
    <div className="modal">
      <div className="modal-content">
        <span
          className="close-icon"
          onClick={props.modalQuit} >
        </span>
        {newObjForm ? 
          <ObjectiveForm
            titleChange={props.updateTitle}
            descChange={props.updateDesc}
            formSubmit={props.submitForm}/> : null
        }
        {editObjForm ? 
          <EditObjectivesForm
            titleChange={props.updateTitle}
            descChange={props.updateDesc}
            formSubmit={props.submitForm}
            titleValue={props.titleVal}
            descValue={props.descVal}
            changedTitle={props.editedTitle}/> : null
        }
      </div>
    </div>
  );
}

export default modal;