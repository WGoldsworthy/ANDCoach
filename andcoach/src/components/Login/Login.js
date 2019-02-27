import React from 'react';
import GoogleLogin from 'react-google-login';

import Logo from '../../assets/images/logocoach.png';

const loginContent = (props) => {
  return(
    <header className="App-header">
      <img className="fade-in-up" src={Logo} alt="logo"/>
      <h1 className="fade-in-up">Accelerating your digital aspirations</h1>
      <GoogleLogin 
        clientId={props.authId}
        buttonText={props.loginText}
        onSuccess={props.loginSuccess}
        onFailure={props.loginFail}/>
    </header>
  );
}

export default loginContent;