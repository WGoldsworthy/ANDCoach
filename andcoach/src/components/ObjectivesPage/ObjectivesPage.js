import React, { Component } from 'react';
import ObjectiveCard from '../ObjectiveCard/ObjectiveCard.js';

class ObjectivesPage extends Component {
  state = {
    objectives: [
      {title: 'Objective title', notes: 'body ody ody', status: 'in progress', evidence: null},
      {title: 'Objective title', notes: 'body ody ody x2', status: 'in progress', evidence: 'none'}]
  }
  render() {
    return (
      <div className='ObjectivesPage'>
        <div className='objectives-page-header'>
          <h1>Your Objectives</h1>
        </div>
        <div className='ObjectivesList'>
        {this.state.objectives.map((objectiveItem, index) => {
          return <ObjectiveCard 
            title={objectiveItem.title}
            notes={objectiveItem.notes}
            status={objectiveItem.status}
            evidence={objectiveItem.evidence}
            key={index}/>
          })}
        </div>
      </div>
    );
  }
}

export default ObjectivesPage;
