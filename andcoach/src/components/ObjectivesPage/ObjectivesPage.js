import React, { Component } from 'react';
import ObjectivesContent from '../ObjectivesContent/ObjectivesContent';
import UserDetails from '../UserDetails/UserDetails';

class ObjectivesPage extends Component {

  render(){
    
    return(
      <div className = "profile-content container">
        <UserDetails 
        uName={this.props.uName}
        uPic={this.props.uPic}
        uEmail={this.props.uEmail}
        />
        <ObjectivesContent
          showModal={this.props.showModal}
          userId={this.props.userId}
        />
      </div>
    );
  }
}

export default ObjectivesPage;