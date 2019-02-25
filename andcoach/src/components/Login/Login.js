import React from 'react';
import GoogleLogin from 'react-google-login';

import Logo from '../../assets/images/logo.png';

const loginContent = (props) => {
  return(
    <header className="App-header">
      <img src={Logo} alt="logo"/>
      <h1>Accelerating your digital aspirations</h1>
      <GoogleLogin 
        clientId={props.authId}
        buttonText={props.loginText}
        onSuccess={props.loginSuccess}
        onFailure={props.loginFail}/>
    </header>
  );
}

export default loginContent;