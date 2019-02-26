import React, { Component } from 'react';

class ProgressSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selection: '',
      statusChanged: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange(event) {
    this.setState({selection: event.target.value, statusChanged: true});
    if (event.target.value==="Please select status:") this.setState({statusChanged: false});
    console.log(event.target.value);
  }

  handleSaveClick = (props) => {
    this.props.saveHandler({selection: this.state.selection});
    console.log('saved new status');
  }

  render(){
    return (
      <div>
        <select value={this.state.selection} onChange = {this.handleChange}>
          <option defaultValue ='none'>Please select status:</option>
          <option value ='Not Started'>Not started</option>
          <option value='In Progress'>In Progress</option>
          <option value='Done'>Done</option>
        </select>
        {this.state.statusChanged ? <button onClick={this.handleSaveClick}>Save</button> : null}
      </div>
    );
  }
}

export default ProgressSelector;