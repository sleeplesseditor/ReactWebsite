import React, { Component } from 'react';
import './style.css';

import Header from './Header';
import Footer from './Footer';
import AccountCreate from './AccountCreate';
import Features from './Features';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Features />
        <AccountCreate />
        <Footer />
      </div>
    );
  }
}

export default App;
