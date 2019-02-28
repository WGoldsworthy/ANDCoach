import React, { Component } from 'react';
import ProgressSelector from './ProgressSelector';

class ObjectiveCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: this.props.status,
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
  }


  handleStatusEditClick = () => {
    this.setState({editClicked: true, statusSaved: false}); 
    console.log('clicked edit button');
    console.log(this.state.addEvidenceClicked, this.state.evidence, this.state.evidenceSaved);
  }

  handleSetSavedProgress = (props) => {
    this.setState({status: props.selection, statusSaved: true, editClicked: false});
  }

  handleOpenEvidence = () => {
    window.open(this.state.evidence);
    console.log(this.state.evidence, this.state.addEvidenceClicked, this.state.evidenceSaved);
  }

  handleSetupEvidence = () => {
    this.setState({addEvidenceClicked: true, evidenceSaved: false});
    console.log(this.state.evidence, this.state.addEvidenceClicked, this.state.evidenceSaved);
  }

  handleSaveEvidence = (event) => {
    event.preventDefault();
    this.setState({addEvidenceClicked: false, evidenceSaved: true});
    console.log(this.state.evidence, this.state.addEvidenceClicked, this.state.evidenceSaved);
  }

  handleEvidenceChange = (event) => {
    this.setState({evidence: event.target.value});
    //console.log(this.state.evidence, this.state.addEvidenceClicked, this.state.evidenceSaved);
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
                  this.state.editClicked ? <ProgressSelector id={this.props.id} saveHandler = {this.handleSetSavedProgress}/> : null 
                }
              </div>
            </div>
            <hr />
            <div className='objective-notes'>
              {this.props.notes}
            </div>
            <div className = "Evidence">
            Evidence:&nbsp;
              {this.state.evidenceSaved ? 
              <div>
                  Submitted
                <div>
                  <button onClick={this.handleOpenEvidence}>Open Evidence</button>
                  <button onClick={this.editEvidence}>Edit Evidence</button>
                </div>
              </div>
              :
              
                this.state.addEvidenceClicked ?
                  <form onSubmit={this.handleSaveEvidence}>
                    <input type='link' onChange={this.handleEvidenceChange}></input>
                    <button type='submit'>Save Evidence</button>
                  </form>
              : <div>
                Not Submitted <button onClick={this.handleSetupEvidence}>ADD Evidence</button>
              </div> 
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
