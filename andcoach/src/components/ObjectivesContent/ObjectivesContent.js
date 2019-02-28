import React, { Component } from 'react';
import ObjectiveCard from '../ObjectiveCard/ObjectiveCard.js';
import Modal from '../Modal/Modal';
import axios from 'axios';
import Cookies from "universal-cookie";

const cookies = new Cookies();

var objs = [];

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
    descUpdatedVal: '',
    userId: null
  }

  componentDidMount() {

    var searchString = './api/objectives/' + this.props.userId;
    var parent = this;

    axios.get(searchString).then(function(response) {
        console.log(response);
        objs = response.data.data;
        parent.setState({objectives: objs})
    });
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
    const title = this.state.titleValue;
    const description = this.state.descValue;

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
        console.log(response);
        objs.push(response.data.objective);
        parent.setState({
          showModal: false,
          objectives: objs
        });
    });
  }

  objEditClickHandler = (objectiveItem) => {
    this.setState({
      newObj: false,
      editObj: true,
      showModal: true,
      titleEditVal: objectiveItem.title,
      descEditVal: objectiveItem.notes
    });
  }

  titleEditChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      titleUpdatedVal: this.state.titleEditVal + event.target.value
    });
  }

  saveFormHandler = (event) => {
    event.preventDefault();
    const updatedTitle = event.target.value;
    const updatedDesc = event.target.value;
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
        {this.state.objectives.length ? 
          <div className='objectives-list'>
            {this.state.objectives.map((objectiveItem, index) => {
              return <ObjectiveCard 
                title={objectiveItem.title}
                notes={objectiveItem.notes}
                status={objectiveItem.status}
                evidence={objectiveItem.evidence}
                editClick={this.objEditClickHandler.bind(this, objectiveItem)}
                key={index}/>
            })}
          </div> :
          <div className="no-list">
            <h2>You have not yet added any objectives</h2>
          </div>    
        }

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
