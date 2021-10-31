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
import Company from "./components/pages/Company";
import MainProfile from "./components/pages/subprofile/MainProfile";
import FavouriteJobOffers from "./components/pages/submyjoboffers/FavouriteJobOffers";
import PostedJobOffers from "./components/pages/submyjoboffers/PostedJobOffers";
import JobRequests from "./components/pages/JobRequests";
import AppliedJobOffers from "./components/pages/submyjoboffers/AppliedJobOffers";
import EditExperience from "./components/pages/EditExperience";
import EditEducation from "./components/pages/EditEducation";

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
                    <Route exact path="/company" component={Company}/>
                    <Route exact path="/favourite-job-offers" component={FavouriteJobOffers}/>
                    <Route exact path="/posted-job-offers" component={PostedJobOffers}/>
                    <Route exact path="/applied-job-offers" component={AppliedJobOffers}/>
                    <Route exact path="/job-requests" component={JobRequests}/>
                    <Route exact path="/edit-experience" component={EditExperience}/>
                    <Route exact path="/edit-education" component={EditEducation}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
