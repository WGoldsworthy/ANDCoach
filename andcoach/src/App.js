import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import LoginContent from './components/Login/Login';
import Cookies from 'universal-cookie';
import ObjectivesPage from './components/ObjectivesPage/ObjectivesPage';
import Header from './components/Header/Header';
import NotesPage from './components/NotesPage/NotesPage';

import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router';
const cookies = new Cookies();

class App extends Component {
    
  constructor(props) {
    super(props);
    document.title = "AND Coach"

    this.state = {
      loggedIn: false,
      firstName: null,
      lastName: null,
      profilePic: null,
      email: null,
      userId: null,
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
            email: response.data.user.email,
            userId: response.data.user.userId
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
            email: response.profileObj.email,
            userId: response.googleId
        });
      }
    }

    const responseGoogleFail = (response) => {
      this.setState({loggedIn: false});
    }

    return (
      <div className="App">
        <Router>
          <div>
            {!this.state.loggedIn ?
              <LoginContent
                authId="235133504684-fjvf8vdusr8sjgaea7hs7ijbdu4kjgua.apps.googleusercontent.com"
                loginText="Google Login"
                loginSuccess={responseGoogleSuccess}
                loginFail={responseGoogleFail}/> :
              <div>
                <Route exact path="/" render={() => (<Redirect to="/objectives"/>)}/>
                  <div className="user-profile">
                    <Header />
                      <Route path="/objectives"
                        render={() => (
                          <ObjectivesPage 
                            uName={this.state.firstName}
                            uPic={this.state.profilePic}
                            uEmail={this.state.email}
                            userId={this.state.userId} />
                        )}
                      />
                      <Route path="/notes" 
                        render={() => (
                          <NotesPage
                          uName={this.state.firstName}
                          uPic={this.state.profilePic}
                          uEmail={this.state.email} />
                        )}
                    />
                </div>
              </div> 
            }
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
