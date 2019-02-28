import React, { Component } from 'react';
import ProgressSelector from './ProgressSelector';

class ObjectiveCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'Not Started',
      editClicked: false,
      addEvidenceClicked: false,
      statusSaved: true,
      evidenceSaved: false,
      evidence: '',
    }

    this.handleSetSavedProgress = this.handleSetSavedProgress.bind(this);
    this.handleOpenEvidence = this.handleOpenEvidence.bind(this);
    this.handleStatusEditClick = this.handleStatusEditClick.bind(this);
    this.handleEvidenceChange = this.handleEvidenceChange.bind(this);
    this.handleSaveEvidence = this.handleSaveEvidence.bind(this);
    this.handleSetupEvidence = this.handleSetupEvidence.bind(this);
    this.handleEditEvidence =  this.handleEditEvidence.bind(this);
  }


  handleStatusEditClick = () => {
    this.setState({editStatusClicked: true, statusSaved: false}); 
  }

  handleSetSavedProgress = (props) => {
    this.setState({status: props.selection, statusSaved: true, editStatusClicked: false});
  }

  handleOpenEvidence = () => {
    window.open(this.state.evidence);
  }

  handleSetupEvidence = () => {
    this.setState({addEvidenceClicked: true, evidenceSaved: false});
  }

  handleSaveEvidence = (event) => {
    event.preventDefault();
    this.setState({addEvidenceClicked: false, evidenceSaved: true, editEvidenceClicked: false});
  }

  handleEvidenceChange = (event) => {
    this.setState({evidence: event.target.value});
  }

  handleEditEvidence = (event) => {
    this.setState({editEvidenceClicked: true});
  }

  render() {
    return (
      <li className='objective-card'>
        <div className = 'objective-details'>
          <div>
            <div className = 'objective-header'>
              <div className='objective-title'>{this.props.title}</div>
              <div className='status'>
                Status:&nbsp;
                {
                  this.state.statusSaved ? 
                    <div>
                      {this.state.status}
                      <button
                        className="edit"
                        onClick={this.handleStatusEditClick}>
                        Edit
                      </button>
                    </div> : null
                }
                
                {
                  this.state.editStatusClicked ? <ProgressSelector saveHandler = {this.handleSetSavedProgress}/> : null 
                }
              </div>
            </div>
            <hr />
            <div className='objective-notes'>
              {this.props.notes}
            </div>
            <div className = "Evidence">
            Evidence:&nbsp;
              {this.state.evidenceSaved && !this.state.evidence.trim()=="" && !this.state.editEvidenceClicked ? 
              <div>
                  Submitted
                  {!this.state.editEvidenceClicked ?
                  <div>
                    <button onClick={this.handleOpenEvidence}>Open Evidence</button>
                    <button onClick={this.handleEditEvidence}>Edit Evidence</button>
                </div> :
                    null
                  }
                
              </div>
              :
                this.state.addEvidenceClicked ?
                  <form onSubmit={this.handleSaveEvidence}>
                    <input type='link' onChange={this.handleEvidenceChange}></input>
                    <button type='submit'>Save Evidence</button>
                  </form>
                : 
                  !this.state.editEvidenceClicked 
                  ?
                    <div>
                      Not Submitted <button onClick={this.handleSetupEvidence}>Add Evidence</button>
                    </div> 
                  : null
              }
              {this.state.editEvidenceClicked ?
                <form onSubmit={this.handleSaveEvidence}>
                  <input type='link' onChange={this.handleEvidenceChange} value={this.state.evidence}></input>
                  <button type='submit'>Save Evidence</button>
                </form>
              : null
              } 
            </div>
          </div>
          <button
            className="edit-obj"
            onClick={this.props.editClick}>
              edit
          </button>
        </div>
      </li>
    );
  }
}

export default ObjectiveCard;
