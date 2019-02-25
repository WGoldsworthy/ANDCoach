import React, { Component } from 'react';
import './styles/App.css';

import LoginContent from './components/Login/Login';
import UserDetails from './components/UserDetails/UserDetails';

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
          <UserDetails 
            uName={this.state.firstName}
            uPic={this.state.profilePic}
            uEmail={this.state.email}/>
        }
      </div>
    );
  }
}

export default App;
