import React from 'react';
// import Header from './Header';
import HeaderHooks from './HeaderHooks';
import Main from './Main';
import Footer from './Footer';
import { useAuth0 } from "../react-auth0-spa";

import {BrowserRouter as Router} from "react-router-dom";

function AppHooks() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='wrapper'>
      <Router>
        <HeaderHooks />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default AppHooks;
