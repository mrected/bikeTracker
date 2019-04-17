import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Status from './Status'
import App from './App'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/status" component={Status}/>
        </Switch>
    </BrowserRouter>
)

export default Router;
