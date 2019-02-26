import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import LoginContent from './components/Login/Login';
import Objectives from './components/Objectives/Objectives';
import UserDetails from './components/UserDetails/UserDetails';
import ObjectivesPage from './components/ObjectivesPage/ObjectivesPage';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      firstName: null,
      lastName: null,
      profilePic: null,
      email: null,
      showModal: false,
    }
  }

  addClickHandler = () => {
    this.setState({showModal: true});
  }

  closeClickHandler = () => {
    this.setState({showModal: false})
  }

  render() {
    const responseGoogleSuccess = (response) => {
      if (!response.error) {

        var userId = response.googleId;
        var firstName = response.profileObj.givenName;
        var lastName = response.profileObj.familyName;
        var email = response.profileObj.email;
        var imageUrl = response.profileObj.imageUrl;

        axios.post('./users/login', {
          userId: userId,
          firstName: firstName,
          lastName: lastName,
          email: email,
          imageUrl: imageUrl,
        }).then(function (response) {
      // Redirect to objectives dashboard.
      // Also need logic for if bad response from google auth. i.e. not authorised
        });

        this.setState({
          loggedIn: true,
          firstName: response.profileObj.givenName,
          lastName: response.profileObj.familyName,
          profilePic: response.profileObj.imageUrl,
          email: response.profileObj.email
        });
      }
    }

    const responseGoogleFail = (response) => {
      this.setState({loggedIn: false});
    }

    return (
      <div className="App">
        {!this.state.loggedIn ?
          <LoginContent
            authId="235133504684-fjvf8vdusr8sjgaea7hs7ijbdu4kjgua.apps.googleusercontent.com"
            loginText="Google Login"
            loginSuccess={responseGoogleSuccess}
            loginFail={responseGoogleFail}/> :
          <div className="user-profile">
            <UserDetails
              uName={this.state.firstName}
              uPic={this.state.profilePic}
              uEmail={this.state.email}/>
            <Objectives 
              addClick={this.addClickHandler.bind(this)}
              closeClick={this.closeClickHandler}
              showModal={this.state.showModal}/>
          </div>  
          
        }
        <ObjectivesPage />
      </div>
    );
  }
}


export default App;
