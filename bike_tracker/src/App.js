import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'

import StatusData from './data/statusData.json';

import statusIcon from './svg/status.svg';
import addMilesIcon from './svg/addMiles.svg';
import updatePartsIcon from './svg/parts.svg';
import distanceIcon from './svg/distance.svg';
import timeIcon from './svg/time.svg';
import locationIcon from './svg/location.svg';
import weatherIcon from './svg/weather.svg';
import accountIcon from './svg/account.svg';

import Status from './components/Status';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  

  render() {


    return (
      <div className="app">
        <h1>Bike Tracker</h1>
        <Router>
          <section className="dashboard">
            <div className="dash-row">
              <div>
                <img className="weather-icon" src={weatherIcon} alt="weather icon" />
                <p>partly cloudy</p>
              </div>
              <div>
                <img src={accountIcon} alt="account icon" />
                <p>account</p>
              </div>
            </div>
            <div className="dash-row">
              <h2 className="module-title">Ride Conditions</h2>
              <div className="status-bar">
                <div className="status-light good"></div>
                <div className="status-light warning"></div>
                <div className="status-light danger"></div>
              </div>
            </div>
          </section>
          <section className="module">
            <div>
              <h2 className="module-title">status</h2>
              <img src={statusIcon} alt="bike status"></img>
            </div>
            <div className="module-info">
              <div className="status-breakdown">

                {StatusData.map((item, i) => <div className="status-cell" index={item.id}>{item.name}</div>)}
                {/* add a row for every 2 td cells */}

              </div>
            </div>
          </section>
          <section className="module">
            <h2 className="module-title">Track</h2>
            <div className="module-info">
              <div className="info-box">
                <img src={addMilesIcon} alt="add miles icon" />
                <p className="info-box-title">Add Miles</p>
              </div>
              <div className="info-box">
                <img src={updatePartsIcon} alt="update parts icon" />
                <p className="info-box-title">Update Parts</p>
              </div>
            </div>
          </section>
          <section className="module">
            <h2 className="module-title">ride</h2>
            <div className="module-info">
            <div className="info-box">
                <img src={distanceIcon} alt="distance icon" />
                <p className="info-box-title">Distance</p>
              </div>
              <div className="info-box">
                <img src={timeIcon} alt="time icon" />
                <p className="info-box-title">Time</p>
              </div>
              <div className="info-box">
                <img src={locationIcon} alt="location icon" />
                <p className="info-box-title">Location</p>
              </div>
            </div>
          </section>
        </Router>
      </div>
    );
  }
}

export default App;
