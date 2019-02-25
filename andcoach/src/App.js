import React, { Component } from 'react';
import './styles/App.css';

import GoogleLogin from 'react-google-login';

class App extends Component {
  render() {

    const responseGoogle = (response) => {
      console.log(response);
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
