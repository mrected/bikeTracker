import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './Main'
import Status from './Status'

import statusData from '../data/statusData.json'

class App extends Component {
  constructor(props) {
    super(props)
    this._statusButton = this._statusButton.bind(this)
    this.state = {
      status: [],
      selectedStatus: []
    }
    
  }

  componentDidMount(){
    this.setState({
      status: statusData
    })
  }


  _statusButton = (e,props) => {
    e.preventDefault()
    let selectedState = this.state.selectedStatus
    const statusNumber = e.target.getAttribute('index')
    selectedState = this.state.status[statusNumber]
    this.setState({ selectedStatus: selectedState })
    console.log(this.props)
  }

  linkTest = (e) => {
    e.preventDefault()
    console.log(this)
  }


  render() {
    return ( 
      <Router>
        <Switch>
          <Route 
            exact path="/" component={(props) => <Main 
              statusNames = {this.state.status.map(item => item.name)}
              _statusButton = {(props) => this._statusButton(props)}
          />} />
          <Route path="/status" component={(props) => <Status details={{...this.state.selectedStatus}}/>} />
          <Route path="/status" component={<Status />} />
        </Switch>
      </Router>
    )
  }
}

export default App
