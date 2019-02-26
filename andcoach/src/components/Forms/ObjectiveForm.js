import React, { Component } from 'react';

class ObjectiveForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titleValue: '',
      descValue: '',
      objectives: [
        {
          objTitle: '',
          objDesc: ''
        }
      ]
    }
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
      objectives: [{
        objTitle: title,
        objDesc: description
      }]
    });
  }


  render() {
    return(
      <form onSubmit={this.objSubmitHandler}>
        <div className="input-container">
          <label>Title: </label>
          <input type="text" name="Test" onChange={this.titleChangeHandler}/>
        </div>
          <div className="input-container">
            <label>Description: </label>
            <textarea rows="6" desc="this is description" onChange={this.descChangeHandler}/>
          </div>
        <button className="submit-btn">Submit</button>
      </form>
    );
  };
}

export default ObjectiveForm;