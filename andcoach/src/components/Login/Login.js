import React from 'react';
import GoogleLogin from 'react-google-login';

import Logo from '../../assets/images/logo.png';

const loginContent = (props) => {
  return(
    <header className="App-header">
      <img className="fade-in-up" src={Logo} alt="logo"/>
      <h1 className="fade-in-up">Accelerating Your Digital Aspirations</h1>
      <GoogleLogin 
        clientId={props.authId}
        render={renderProps => (
          <button className="login" onClick={renderProps.onClick}>Login</button>
        )}
        buttonText={props.loginText}
        onSuccess={props.loginSuccess}
        onFailure={props.loginFail}/>
    </header>
  );
}

export default loginContent;