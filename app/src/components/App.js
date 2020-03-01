import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useAuth0 } from "../react-auth0-spa";

import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {
  render() {
    const { loading } = useAuth0();

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className='wrapper'>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
