import IonRangeSlider from 'react-ion-slider';
import React, {useEffect, useState} from "react";
import $ from 'jquery';
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import ListItemText from "@mui/material/ListItemText";
import {Event, HomeWork, LocationOn, Payment, StarBorder} from "@mui/icons-material";
import "../../assets/styles/my-job-offer.css"
import CompanyHeader from "../reusable/CompanyHeader";
import Favorite from '@mui/icons-material/Favorite';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import AuthService from "../../services/auth.service";
import JobService from "../../services/job.service";
import {useHistory} from "react-router";


export default function JobOfferPage() {

    const [jobOffer, setJobOffer] = useState(null);
    const [message, setMessage] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [favouriteText, setFavouriteText] = useState('Add this job offer to your favourites');
    const [appliedText, setAppliedText] = useState('Apply for this job');
    const [disabledFavourite,setDisabledFavourite] = useState(false);
    const [disabledApplied,setDisabledApplied] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setMessage('');
        JobService.getSpecificJobOffer(window.location.href.split('/')[4]).then(
            result => {
                setJobOffer(result.data)
                if (result.data.favourite) {
                    setFavouriteText("This is one of your favourite job offers.")
                    setDisabledFavourite(true);
                }
                if (result.data.applied) {
                    setAppliedText("You already applied for this job.")
                    setDisabledApplied(true);
                }
            },
            error => {
                let resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setMessage(resMessage);
            }
        )
    }, []);

    const handleApplyForThisJob = (event) => {
        if (!AuthService.isLogged()) {
            window.location.replace('http://localhost:3000/login');
        }else{
            window.location.replace(`http://localhost:3000/apply-for-a-job/${jobOffer.id}`);
        }
    };

    const handleAddJobToFavourites = (event) => {
        if (!AuthService.isLogged()) {
            window.location.replace('http://localhost:3000/login');
        }else{
            event.preventDefault();
            setMessage("");
            setSuccessful(false);
            JobService.addJobToFavourites(jobOffer.id).then(
                result => {
                    setMessage(result.data.message);
                    setSuccessful(true);
                    setDisabledFavourite(true)
                },
                error => {
                    let resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                    setSuccessful(false);
                }
            )
        }
    }


    return (
        <main>
            <a href={`/company/${jobOffer ? jobOffer.companyName : ''}`} className="text-dark">
                <CompanyHeader image={jobOffer ? jobOffer.companyImage : ''}
                               name={jobOffer ? jobOffer.companyName : ''}/>
            </a>
            <div className="row mt-2 d-flex justify-content-center">
                <div className="col-12 col-md-8 card bg-dark">
                    <nav className="navbar navbar-light navbar-expand-xl  shadow-lg">
                        <div className="container-fluid">
                            <button data-bs-toggle="collapse" className="navbar-toggler bg-light"
                                    data-bs-target="#navcol-3">
                                <span className="visually-hidden">Toggle navigation</span><span
                                className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navcol-3">
                                {
                                    jobOffer ? (
                                            jobOffer.owner ? (
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                        <a className="nav-link active text-white" href="#">
                                                            See applications
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-white" href="#">
                                                            Edit job offer
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-white" href="#">
                                                            Remove job offer
                                                        </a>
                                                    </li>
                                                </ul>
                                            ) : null
                                        )
                                        : null
                                }
                                {
                                    jobOffer ? (
                                        !jobOffer.owner ? (
                                            <ul className="navbar-nav ">

                                                <li className="nav-item">
                                                    <a className="nav-link active"
                                                       href="#">
                                                        <button disabled={disabledApplied}
                                                                className="btn btn-outline-primary swing animated"
                                                                type="button" onClick={handleApplyForThisJob}>
                                                            {appliedText} <FontAwesomeIcon
                                                            icon={!jobOffer.applied ? faPaperPlane : faCheck}/>
                                                        </button>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active"
                                                       href="#">
                                                        <button disabled={disabledFavourite}
                                                                className="btn btn-outline-success swing animated"
                                                                type="button" onClick={handleAddJobToFavourites}>
                                                            {favouriteText} <FontAwesomeIcon
                                                            icon={!jobOffer.favourite ? faPaperPlane : faCheck}/>
                                                        </button>
                                                    </a>
                                                </li>
                                            </ul>
                                        ) : null
                                    ) : null
                                }
                                {message && (
                                    <div className="form-group">
                                        <div
                                            className={
                                                successful ? "alert alert-success" : "alert alert-danger"
                                            }
                                            role="alert"
                                        >
                                            {message}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row mt-2 d-flex justify-content-center">
                <div className="col-12 col-md-8 card d-flex flex-column shadow-lg p-4">
                    <div className="d-flex flex-row justify-content-center ">
                        <h4 className="display-6  mt-1 ">
                            {jobOffer ?
                                jobOffer.title
                                : null}
                        </h4>
                    </div>
                    <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <LocationOn/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Location" secondary={jobOffer ? jobOffer.location : null}/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Payment/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Salary"
                                          secondary={((jobOffer ? jobOffer.salary_low : null) + "$ — " + (jobOffer ? jobOffer.salary_high : null) + "$").toString()}/>
                        </ListItem>
                        {
                            jobOffer ?
                                jobOffer.remote === true ?
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <HomeWork/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Remote job"/>
                                    </ListItem> : null
                                : null
                        }

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Event/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Published" secondary={jobOffer ? jobOffer.createdAt : null}/>
                        </ListItem>
                    </List>
                    <div className="mt-4">
                        {jobOffer ?
                            <small dangerouslySetInnerHTML={{__html: jobOffer.description}}>
                            </small>
                            :
                            null}
                    </div>
                </div>
            </div>
        </main>
    );

}