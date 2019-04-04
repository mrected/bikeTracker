import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Bike Tracker</h1>
        <section className="module"><h2>current status</h2></section>
        <section className="module"><h2>status</h2></section>
        <section className="module"><h2>track</h2></section>
        <section className="module"><h2>ride</h2></section>
      </div>
    );
  }
}

export default App;
