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
      evidence: null,
    }

    this.handleSetSavedProgress = this.handleSetSavedProgress.bind(this);
    this.handleOpenEvidence = this.handleOpenEvidence.bind(this);
    this.handleStatusEditClick = this.handleStatusEditClick.bind(this);
  }


  handleStatusEditClick = () => {
    this.setState({editClicked: true, statusSaved: false}); 
    console.log('clicked edit button');
  }

  handleSetSavedProgress = (props) => {
    this.setState({status: props.selection, statusSaved: true, editClicked: false});
  }

  handleOpenEvidence = () => {
    window.open(this.props.evidence);
  }

  handleSetupEvidence = () => {
    this.setState({addEvidenceClicked: true});
  }

  handleSaveEvidence = (event) => {
    event.preventDefault();
    this.setState({addEvidenceClicked: false});
  }

  handleEvidenceChange = (event) => {
    this.setState({evidence: event.target.value});
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
                      <button onClick={this.handleStatusEditClick}>Edit</button>
                    </div> : null
                }
                
                {
                  this.state.editClicked ? <ProgressSelector saveHandler = {this.handleSetSavedProgress}/> : null 
                }
              </div>
            </div>
            <hr />
            <div className='objective-notes'>
              {this.props.notes}
            </div>
            <div className = "Evidence">
              {this.props.evidence ? 
              <div>
                  Evidence Submitted.
                <div>
                  <button onClick={this.handleOpenEvidence}>Open Evidence</button>
                </div>
              </div>
              : null}
              {
                this.state.addEvidenceClicked ?
                  <form onSubmit={this.handleSaveEvidence}>
                    <input type='link' onChange={this.handleEvidenceChange}></input>
                    <button type='submit'>Save Evidence</button>
                  </form>
              : <button onClick={this.handleSetupEvidence}>ADD Evidence</button> 
              }
            </div>
          </div>
        </div>
        
      </li>

    );
  }
}

export default ObjectiveCard;
