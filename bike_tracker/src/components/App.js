import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './Main'
import Status from './Status'

import statusData from '../data/statusData.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: []
    }
    
  }

  componentDidMount(){
    this.setState({
      status: statusData
    })

  }


  _statusButton = e => {
    e.preventDefault()
    const statusName = e.target.textContent
    this.props.history.push(`/status/${statusName}`)
  }

  // need to pass status names only to Main
  // when status button on main is clicked, need to pass selected status object to Status component

  render() {
    return ( 
      <Router>
        <Switch>
          <Route exact path="/" component={(props) => <Main statusNames = {this.state.status.map(item => item.name)} />} />
          <Route path="/status" component={(props) => <Status {...props} />} />
        </Switch>
      </Router>
    )
  }
}

export default App
