import React, { Component } from 'react';
import ObjectivesContent from '../ObjectivesContent/ObjectivesContent';
import UserDetails from '../UserDetails/UserDetails';
import Header from '../Header/Header';

class ObjectivesPage extends Component {

  render(){
    return(
      <div>
        <UserDetails 
        uName={this.props.uName}
        uPic={this.props.uPic}
        uEmail={this.props.uEmail}
        />
        <ObjectivesContent
          showModal={this.props.showModal}
        />
      </div>
    );
  }
}

export default ObjectivesPage;