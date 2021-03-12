import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import "assets/scss/index.scss";
import HomePage from "./views/HomePage/HomePage";

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/" component={HomePage} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
