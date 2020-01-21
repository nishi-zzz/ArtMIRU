import React from 'react';
import Home from './Home';
import Archive from './Archive';
import Profile from './Profile';
import Admin from './Admin';

import {Switch, Route} from "react-router-dom";

class Main extends React.Component {

  render() {
    return (
      <div className="content-wrapper">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/archive">
            <Archive />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function Signup() {
  return <h2>Signup</h2>;
}

export default Main;
