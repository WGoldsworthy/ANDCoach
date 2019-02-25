import React, { Component } from 'react';
import './styles/App.css';

import GoogleLogin from 'react-google-login';
import axios from 'axios';

class App extends Component {
  render() {

    const responseGoogle = (response) => {

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

}

    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Accelerating your digital aspirations</h1>
          <GoogleLogin 
            clientId="235133504684-fjvf8vdusr8sjgaea7hs7ijbdu4kjgua.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}/>
        </header>
      </div>
    );
  }
}

export default App;
