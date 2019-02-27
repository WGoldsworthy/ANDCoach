import React, { Component } from 'react';
import ObjectiveCard from '../ObjectiveCard/ObjectiveCard.js';
import Modal from '../Modal/Modal';
import axios from 'axios';
import Cookies from "universal-cookie";

const cookies = new Cookies();

var objs = [];
var searchString = './api/objectives/' + cookies.get('userId');

axios.get(searchString).then(function(response) {
  if (response.data.data.length !== 0) {
    objs = response.data.data;
  }
});

class ObjectivesContent extends Component {

  state = {
    newObj: false,
    editObj: false,
    showModal: false,
    titleValue: '',
    descValue: '',
    objectives: objs,
    titleEditVal: '',
    descEditVal: '',
    titleUpdatedVal: '',
    descUpdatedVal: ''
  }

  addClickHandler = () => {
    this.setState({
      editObj: false,
      newObj: true,
      showModal: true
    });
  }

  closeClickHandler = () => {
    this.setState({showModal: false})
  }

  titleChangeHandler = (event) => {
    console.log(this.state.titleValue, event.target.value)
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
        objs.push(response.data.objective);
        parent.setState({
          showModal: false,
          objectives: objs
        });
    });
  }

  objEditClickHandler = (objectiveItem) => {
    console.log(objectiveItem);
    this.setState({
      newObj: false,
      editObj: true,
      showModal: true,
      titleEditVal: objectiveItem.title,
      descEditVal: objectiveItem.notes
    });
  }

  titleEditChangeHandler = (event) => {
    // console.log(event.target.value);
    // this.setState({
    //   titleUpdatedVal: this.state.titleEditVal + event.target.value
    // });
  }

  saveFormHandler = (event) => {
    event.preventDefault();
    const updatedTitle = event.target.value
    const updatedDesc = event.target.value
    this.setState({
      titleValue: updatedTitle,
      descValue: updatedDesc
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
          console.log(objectiveItem);
          return <ObjectiveCard 
            title={objectiveItem}
            notes={objectiveItem.notes}
            status={objectiveItem.status}
            evidence={objectiveItem.evidence}
            editClick={this.objEditClickHandler.bind(this, objectiveItem)}
            key={index}/>
          })}
        </div>
        {modal ? 
          <Modal 
            modalQuit={this.closeClickHandler}
            updateTitle={this.titleChangeHandler}
            updateDesc={this.descChangeHandler}
            editedTitle={this.titleEditChangeHandler}
            submitForm={this.objSubmitHandler}
            formSave={this.saveFormHandler}
            newObj={this.state.newObj}
            editObj={this.state.editObj}
            titleVal={this.state.titleEditVal}
            descVal={this.state.descEditVal}/> : null
        }
      </div>
    );
  }
}

export default ObjectivesContent;
