import {Route, Switch,Router} from "react-router";
import React from "react";
import Navigation from "./components/reusable/Navigation";
import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import JobOfferPage from "./components/pages/JobOfferPage"
import ApplyForJobPage from "./components/pages/ApplyForJobPage"
import AddJobDescription from "./components/pages/AddJobDescription";
import ContactUs from "./components/pages/ContactUs"
import Pricing from "./components/pages/Pricing"
import history from "./hooks/history";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'



import './assets/styles/job-list.css';
import './assets/styles/navigation.css';
import './assets/styles/login-form.css';
import './assets/styles/registration-form.css';
import './assets/styles/job-application.css'
import './assets/styles/pricing.css'
import AddJobBasicDescription from "./components/pages/AddJobBasicDescription";
import JobOffer from "./components/pages/JobOffer";
import Profile from "./components/pages/Profile";
import MainProfile from "./components/pages/subprofile/MainProfile";

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
                    <Route exact path="/add-job-description" component={AddJobDescription}/>
                    <Route exact path="/contact-us" component={ContactUs}/>
                    <Route exact path="/pricing" component={Pricing}/>
                    <Route exact path="/add-job-offer" component={AddJobBasicDescription} />
                    <Route exact path="/job-offer-add" component={JobOffer}/>
                    <Route exact path="/profile/*" component={Profile}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
