import React, { Component } from 'react';
import ObjectiveCard from '../ObjectiveCard/ObjectiveCard.js';
import UserDetails from '../UserDetails/UserDetails.js';

class ObjectivesPage extends Component {
  state = {

  }
  render() {
    return (
      <div className='ObjectivesPage'>
        <UserDetails />
        <div className='ObjectivesList'>
        Your Objectives
          <ObjectiveCard />
          <ObjectiveCard />
          <ObjectiveCard />
          <ObjectiveCard />
        </div>
      </div>
    );
  }
}

export default ObjectivesPage;
