import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Details from "./Details";
import AppNew  from "./AppNew"
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                   <Route path="/" exact component={AppNew} />
                    <Route path="/Details" exact component={Details} />
                    
                </Switch>
            </Router>
        )
    }
}