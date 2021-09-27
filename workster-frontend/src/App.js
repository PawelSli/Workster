import {Route, Switch} from "react-router";
import {Router} from 'react-router-dom';
import React from "react";
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import history from "./hooks/history";
import Scripts from "./hooks/Scripts";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/job-list.css';
import './assets/styles/profile.css';
import './assets/styles/navigation.css';

function App() {

    return (
        <>
            <Scripts/>
            <Router history={history}>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
