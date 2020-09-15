import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProjectPage from "views/ProjectPage/ProjectPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <ScrollToTop>
            <Switch>
                <Route path="/project/:project_id" component={ProjectPage}/>
                <Route path="/" component={LandingPage}/>
            </Switch>
        </ScrollToTop>
    </Router>,
    document.getElementById("root")
);
