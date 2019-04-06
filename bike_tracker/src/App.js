import React, { Component } from 'react';
import status from './svg/status.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Bike Tracker</h1>
        <section className="module">
          <h2>current status</h2>
        </section>
        <section className="module">
          <div>
            <h2 className="module-title">status</h2>
            <img src={status} alt="bike status"></img>
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
          <div className="module-info">info</div>
        </section>
        <section className="module">
          <h2 className="module-title">ride</h2>
          <div className="module-info">info</div>
        </section>
      </div>
    );
  }
}

export default App;
