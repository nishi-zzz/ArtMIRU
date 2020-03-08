import React from 'react';
import HomeHooks from './HomeHooks';
import Archive from './Archive';
import ProfileHooks from './ProfileHooks';
import Admin from './Admin';
import Signup from './Signup';
import About from './About';
import Login from './Login';

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
            <ProfileHooks />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <HomeHooks />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
