import React, { Component } from 'react';
import './styles/App.css';

import LoginContent from './components/Login/Login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      firstName: null,
      lastName: null,
      profilePic: null,
      email: null
    }
  }  

  render() {
    const responseGoogleSuccess = (response) => {
      console.log(response);
      this.setState({
        loggedIn: true,
        firstName: response.profileObj.givenName,
        lastName: response.profileObj.familyName,
        profilePic: response.profileObj.imageUrl,
        email: response.profileObj.email
      });
    }

    const responseGoogleFail = (response) => {
      console.log(response);
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
          <div 
            className="profile-content">
            <h1>You are successfully Sined In</h1>
            <p>First Name: {this.state.firstName}</p>
            <p>Last Name: {this.state.lastName}</p>
            <p>Email: {this.state.email}</p>
            <img src={this.state.profilePic} alt="Profile Pic"/>
          </div>  
        }
      </div>
    );
  }
}

export default App;
