import {Route, Switch,Router} from "react-router";
import React from "react";
import Navigation from "./components/reusable/Navigation";
import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import JobOfferPage from "./components/pages/JobOfferPage"
import ApplyForJobPage from "./components/pages/ApplyForJobPage"
import ContactUs from "./components/pages/ContactUs"
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
import AddJobOffer from "./components/pages/AddJobOffer";
import Profile from "./components/pages/Profile";
import Company from "./components/pages/Company";
import MainProfile from "./components/pages/subprofile/MainProfile";
import FavouriteJobOffers from "./components/pages/submyjoboffers/FavouriteJobOffers";
import PostedJobOffers from "./components/pages/submyjoboffers/PostedJobOffers";
import JobRequests from "./components/pages/JobRequests";
import AppliedJobOffers from "./components/pages/submyjoboffers/AppliedJobOffers";
import EditExperience from "./components/pages/EditExperience";
import EditEducation from "./components/pages/EditEducation";
import DeleteUser from "./components/pages/DeleteUser";
import DeleteCompany from "./components/pages/DeleteCompany";
import AddCompany from "./components/pages/AddCompany";
import EditUserInformation from "./components/pages/EditUserInformation";
import ChangePassword from "./components/pages/ChangePassword";
import ShowMyJobRequest from "./components/pages/ShowMyJobRequest";
import EditJobOffer from "./components/EditJobOffer";
import PrivateRoute from "./components/reusable/PrivateRoute";

function App() {

    return (
        <>
            <Router history={history}>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route exact path="/job-offer/*" component={JobOfferPage}/>
                    <Route exact path="/contact-us" component={ContactUs}/>
                    <Route exact path="/company/*" component={Company}/>
                    <PrivateRoute exact path="/apply-for-a-job" component={ApplyForJobPage}/>
                    <PrivateRoute exact path="/add-job-offer" component={AddJobOffer} />
                    <PrivateRoute exact path="/add-company" component={AddCompany} />
                    <PrivateRoute exact path="/profile/*" component={Profile}/>
                    <PrivateRoute exact path="/favourite-job-offers" component={FavouriteJobOffers}/>
                    <PrivateRoute exact path="/posted-job-offers" component={PostedJobOffers}/>
                    <PrivateRoute exact path="/applied-job-offers" component={AppliedJobOffers}/>
                    <PrivateRoute exact path="/job-requests" component={JobRequests}/>
                    <PrivateRoute exact path="/edit-experience" component={EditExperience}/>
                    <PrivateRoute exact path="/edit-education" component={EditEducation}/>
                    <PrivateRoute exact path="/delete-user" component={DeleteUser}/>
                    <PrivateRoute exact path="/delete-company" component={DeleteCompany}/>
                    <PrivateRoute exact path="/edit-user-information" component={EditUserInformation}/>
                    <PrivateRoute exact path="/change-password" component={ChangePassword}/>
                    <PrivateRoute exact path="/show-my-job-request" component={ShowMyJobRequest}/>
                    <PrivateRoute exact path="/edit-job-offer" component={EditJobOffer}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
