import React, { Component } from 'react';
class ObjectiveWindow extends Component {

  handleSubmit = (event) => {
    event.preventDefault();

  };

  render() {
    return (
        <div className = 'ObjectiveWindow'>
        <p><h1>Your Objective</h1></p>
        <form>
            <p>Title*:<br />
              <input type='text' required /></p>
            <p>Body: <br />
              <textarea rows="6" cols="50" /></p>
            <p>Evidence: <br />
              <input type='link' /></p>
            <button onSubmit={this.handleSubmit} type='submit'>Save Objective</button>
          </form>
        </div>
    );
  }
}

export default ObjectiveWindow;
