import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
          <img src={logo} className="logo" alt="logo" />
      </div>
    );
  }
}

export default App;
