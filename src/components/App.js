import React, { Component } from 'react';
import './style.css';

import Header from './Header';
import Features from './Features';
import Staff from './Staff';
import Advisor from './Advisor';
import AccountCreate from './AccountCreate';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Features />
        <Staff />
        <Advisor />
        <AccountCreate />
        <Footer />
      </div>
    );
  }
}

export default App;
