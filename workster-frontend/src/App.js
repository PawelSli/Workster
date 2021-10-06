import {Route, Switch} from "react-router";
import {Router} from 'react-router-dom';
import React from "react";
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import JobOfferPage from "./components/JobOfferPage"
import ApplyForJobPage from "./components/ApplyForJobPage"
import ContactUs from "./components/ContactUs"
import history from "./hooks/history";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/job-list.css';
import './assets/styles/profile.css';
import './assets/styles/navigation.css';
import './assets/styles/login-form.css';
import './assets/styles/registration-form.css';
import './assets/styles/job-application.css'

function App() {

    return (
        <>
            <Router history={history}>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route exact path="/job-offer" component={JobOfferPage}/>
                    <Route exact path="/apply-for-a-job" component={ApplyForJobPage}/>
                    <Route exact path="/contact-us" component={ContactUs}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
