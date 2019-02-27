import React, { Component } from 'react';
import ObjectiveCard from '../ObjectiveCard/ObjectiveCard.js';
import Modal from '../Modal/Modal';
import axios from 'axios';
import Cookies from "universal-cookie";

const cookies = new Cookies();

var objs = [];
var searchString = './api/objectives/' + cookies.get('userId');

axios.get(searchString).then(function(response) {
  objs = response.data.data;
  console.log(objs)
});

class ObjectivesContent extends Component {

  state = {
    showModal: false,
    titleValue: '',
    descValue: '',
    objectives: objs,
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

    var objective = {
      title: title,
      notes: description,
      evidence: "None",
      status: "Not started",
      user_id: cookies.get('userId')
    }

    var parent = this;

    axios.post('./api/create', objective)
      .then(function(response) {
        console.log("Objective Saved");
        objs.push(response.data,objective);
        parent.setState({
          showModal: false,
          objectives: objs
        });
    });



  }
  
  render() {
    const modal = this.state.showModal;
    return (
      <div className='objectives-section'>
        <div className='objectives-page-header'>
          <h1>Your Objectives</h1>
        </div>
        <button
          className="add"
          onClick={this.addClickHandler}>
        </button>
        <div className='objectives-list'>
        {this.state.objectives.map((objectiveItem, index) => {
          return <ObjectiveCard 
            title={objectiveItem.title}
            notes={objectiveItem.notes}
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
