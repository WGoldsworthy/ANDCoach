import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import LoginContent from './components/Login/Login';
import UserDetails from './components/UserDetails/UserDetails';
import Cookies from 'universal-cookie';
import ObjectivesContent from './components/ObjectivesContent/ObjectivesContent';
import Header from './components/Header/Header';

const cookies = new Cookies();

var checkSession = () => {
  axios.get("./users/checkSession").then(function(response) {
    if (response.data.loggedIn) {
      return true;
    } else {
      return false;
    }
  });
}

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



  checkSess() {
    var parent = this;
    axios.get("./users/checkSession").then(function(response) {
      if (response.data.loggedIn) {
        var searchString = "./users/get/" + cookies.get('userId');
        axios.get(searchString).then(function(response) {

          parent.setState({
            loggedIn: true,
            firstName: response.data.user.firstName,
            lastName: response.data.user.lastName,
            profilePic: response.data.user.imageUrl,
            email: response.data.user.email
          });

        })
      } else {
        parent.setState({loggedIn: false});
      }
    });
  }

  componentDidMount() {
    this.checkSess();
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
          cookies.set('session', response.data.session, {maxAge: 600});
          cookies.set('userId', response.data.userId, {maxAge: 600});
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
            <Header />
            <UserDetails
              uName={this.state.firstName}
              uPic={this.state.profilePic}
              uEmail={this.state.email}/>
            <ObjectivesContent
              showModal={this.state.showModal}/>
          </div>  
          
        }

      </div>
    );
  }
}


export default App;
