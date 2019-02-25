import React, { Component } from 'react';
import Logo from '../../assets/images/logo.png'
class Landing extends Component {

  handleSubmit = (event) => {
    event.preventDefault();

  };

  render() {
    return(
      <div>
        <div className = "Landing">
            <img src={Logo}/>
            <div className = 'coach'>Coach</div>
          {/*  <form>
              <p>Email:<br /><input type='email' placeholder='Email address' required /></p>
              <p>Password:<br />
              <input type='password' placeholder='Password' required /></p>
              <p><button onSubmit={this.handleSubmit} type='submit'>Sign in</button></p>
            </form> */}
        </div>
      </div>
    );
  }
}

export default Landing;
