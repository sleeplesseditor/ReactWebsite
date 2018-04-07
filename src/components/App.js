import React, { Component } from 'react';
import './style.css';

import Header from './Header';
import Footer from './Footer';
import AccountCreate from './AccountCreate'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <AccountCreate />
        <Footer />
      </div>
    );
  }
}

export default App;
