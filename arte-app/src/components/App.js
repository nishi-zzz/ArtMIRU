import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {
  render() {
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
