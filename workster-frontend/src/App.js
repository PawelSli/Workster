import './App.css';
import {Route, Switch} from "react-router";
import {Router} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import React from "react";
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import history from "./hooks/history";
import Scripts from "./hooks/Scripts";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/add-job-description.css';
import './assets/styles/add-job-post.css';
import './assets/styles/Bootstrap-4---Product-List.css';
import './assets/styles/Google-Style-Login.css';
import './assets/styles/ion.rangeSlider.css';
import './assets/styles/job-list.css';
//import './styles/Login-Form-Dark.css';
import './assets/styles/Navigation-with-Search.css';
import './assets/styles/Pretty-Login-Form.css';
import './assets/styles/Pretty-Registration-Form.css';
import './assets/styles/profile.css';
//import './styles/Registration-Form-with-Photo.css';
import './assets/styles/Table-With-Search.css';
import './assets/styles/Table-With-Search-1.css';
import './assets/styles/vanilla-zoom.min.css';

import './assets/js/bs-init';
//import './assets/js/multiple';
import './assets/js/range';
import './assets/js/Table-With-Search';
import './assets/js/vanilla-zoom';

import $ from "jquery";

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
