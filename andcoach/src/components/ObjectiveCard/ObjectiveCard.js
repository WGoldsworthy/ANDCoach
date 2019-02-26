import React, { Component } from 'react';
import ObjectiveWindow from '../ObjectiveWindow/ObjectiveWindow.js';

class ObjectiveCard extends Component {
  state = {
    title: 'Objective title',
    body: 'Objective body body body',
    status: 'status',
    evidence: 'Evidence:',
  }

  handleCardClick = () => {
    console.log('clicked card');
  }

  render() {
    return (
      <li className='ObjectiveCard'>
        <div className = 'ObjectiveDetails' onClick={this.handleCardClick}>
          <div>
            <h2>{this.state.title}</h2>
            <hr />
            <h3>{this.state.body}</h3>
          </div>
        </div>
        <div className = "Status">
          Status: <h4 style={{color: 'black', margin: 0}}>{this.state.status}</h4>
        </div>
        <div className = "Evidence">
          {this.state.evidence}
        </div>
      </li>

    );
  }
}

export default ObjectiveCard;
