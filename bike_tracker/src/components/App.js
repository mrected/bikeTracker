import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Main from './Main'
import Status from './Status'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _statusButton = e => {
    e.preventDefault()
    const statusName = e.target.textContent
    this.props.history.push(`/status/${statusName}`)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/status" component={Status} />
        </Switch>
      </Router>
    )
  }
}

export default App
