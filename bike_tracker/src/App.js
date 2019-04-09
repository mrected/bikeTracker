import React, { Component } from 'react';
import statusIcon from './svg/status.svg';
import addMilesIcon from './svg/addMiles.svg';
import updatePartsIcon from './svg/parts.svg';
import distanceIcon from './svg/distance.svg';
import timeIcon from './svg/time.svg';
import locationIcon from './svg/location.svg';
import weatherIcon from './svg/weather.svg';
import accountIcon from './svg/account.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Bike Tracker</h1>
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
            <table className="status-breakdown">
              <tr>
                <td>Bearings</td>
                <td>Fasteners</td>
              </tr>
              <tr>
                <td>Suspension</td>
                <td>Handlebars</td>
              </tr>
              <tr>
                <td>Tires</td>
                <td>Brakes</td>
              </tr>
              <tr>
                <td>Tubes</td>
                <td>Frame</td>
              </tr>
              <tr>
                <td>Pressure</td>
                <td>Wheels</td>
              </tr>
              <tr>
                <td>Drivetrain</td>
                <td>Cables</td>
              </tr>
            </table>
          </div>
        </section>
        <section className="module">
          <h2 className="module-title">track</h2>
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
      </div>
    );
  }
}

export default App;
