import React, { Component } from 'react';
import ObjectiveCard from '../ObjectiveCard/ObjectiveCard.js';
import Modal from '../Modal/Modal';

class ObjectivesContent extends Component {
  state = {
    showModal: false,
    titleValue: '',
    descValue: '',
    objectives: [
      {
        objTitle: '',
        objDesc: '',
        status: 'in progress',
        evidence: null
      }
    ]
  }

  addClickHandler = () => {
    this.setState({showModal: true});
  }

  closeClickHandler = () => {
    this.setState({showModal: false})
  }

  titleChangeHandler = (event) => {
    this.setState({
      titleValue: event.target.value
    });
  }

  descChangeHandler = (event) => {
    this.setState({
      descValue: event.target.value
    });
  }

  objSubmitHandler = (event) => {
    event.preventDefault();
    const title = this.state.titleValue
    const description = this.state.descValue
    this.setState({
      showModal: false,
      objectives: [{
        objTitle: title,
        objDesc: description
      }]
    });
  }
  
  render() {
    const modal = this.state.showModal;
    return (
      <div className='objectives-section'>
        <div className='objectives-page-header'>
          <h1>Your Objectives</h1>
        </div>
        <span
          className="add"
          onClick={this.addClickHandler}>
        </span>
        <div className='objectives-list'>
        {this.state.objectives.map((objectiveItem, index) => {
          return <ObjectiveCard 
            title={objectiveItem.objTitle}
            notes={objectiveItem.objDesc}
            status={objectiveItem.status}
            evidence={objectiveItem.evidence}
            key={index}/>
          })}
        </div>
        {modal ? 
          <Modal 
            modalQuit={this.closeClickHandler}
            updateTitle={this.titleChangeHandler}
            updateDesc={this.descChangeHandler}
            submitForm={this.objSubmitHandler}/> : null
        }
      </div>
    );
  }
}

export default ObjectivesContent;
