import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCalendar, faHome, faMapMarkerAlt, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import AuthService from "../../services/auth.service"
import JobService from "../../services/job.service"

export default function JobOfferListElement({image, title, company, location, lowerGap, higherGap, remote, date, favourite, applied, owner, setMessage, setSuccessfull}) {

    const [addDropdownElementAction, setAddDropdownElementAction] = useState(false);


    const handleAddToFavourites = (event) => {
        event.preventDefault();
        setMessage("");
        setSuccessfull(false);
        JobService.addJobToFavourites(title).then(
            result => {
                setMessage(result.data.message);
                setSuccessfull(true);
            },
            error => {
                let resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setMessage(resMessage);
                setSuccessfull(false);
            }
        )
    };

    const handleRemoveFromFavourites = (event)=> {
        event.preventDefault();
        setMessage("");
        setSuccessfull(false);
        JobService.removeFromFavourites(title).then(
            result => {
                setMessage(result.data.message);
                setSuccessfull(true);
            },
            error => {
                let resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setMessage(resMessage);
                setSuccessfull(false);
            }
        )
    };

    const handleDeleteJobOffer = (event)=> {
        event.preventDefault();
        setMessage("");
        setSuccessfull(false);
        JobService.deleteJobOffer(title).then(
            result => {
                setMessage(result.data.message);
                setSuccessfull(true);
            },
            error => {
                let resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setMessage(resMessage);
                setSuccessfull(false);
            }
        )
    };


    return (

        <div className="col-12 col-md-11 card d-flex flex-row pt-2 pl-1 pb-1 shadow-lg mb-1">

            <div className="col-4 col-md-2 col-lg-1  ">
                <img src={`${process.env.PUBLIC_URL}/company-logo/${image}`} alt="Generic placeholder image"
                     className=" img-fluid"/>
            </div>
            <div className="container row col-8 col-md-10 col-lg-11 ">

                <div className="col-11 d-flex flex-row row ">
                    <a href={`/job-offer/${title}`} className="text-dark">
                        <div className="col-12 ">
                            <h5 className="font-weight-bold text-hidden">
                                {title}
                                <br/>
                                <small className="text-muted">{company}</small>
                            </h5>
                        </div>
                    </a>
                    <div className="row d-flex flex-row ">
                        <div className="col-6 col-md-3 text-hidden">
                            <FontAwesomeIcon className="icon-new-job-offers" icon={faMapMarkerAlt}/>{location}
                        </div>
                        <div className="col-6 col-md-3 text-hidden">
                            <FontAwesomeIcon className="icon-new-job-offers "
                                             icon={faMoneyBill}/>{(lowerGap + " — " + higherGap).toString()}
                        </div>
                        <div className="col-6 col-md-3 text-hidden">
                            {remote ? <span><FontAwesomeIcon className="icon-new-job-offers "
                                                             icon={faHome}/>Remote</span> : null}
                        </div>
                        <div className="col-6 col-md-3 text-hidden ">
                            <FontAwesomeIcon className="icon-new-job-offers " icon={faCalendar}/>{date}
                        </div>
                    </div>
                </div>
                {AuthService.isLogged() ?
                    (
                        <div className="col-1  text-end dropdown ">
                            <a href="#" className="nav-link " role="button"
                               onClick={() => setAddDropdownElementAction(!addDropdownElementAction)}>
                                <FontAwesomeIcon className="settings-icon-bars-job-offers " icon={faBars}/>
                            </a>
                            <div
                                className={`dropdown-menu dropdown-menu-element ${addDropdownElementAction ? 'show' : ''}`}
                                aria-labelledby="dropdownMenuLink">
                                {owner ?
                                    <div>
                                        <a className="dropdown-item " href="/job-requests">See applications</a>
                                        <div className="dropdown-divider"/>
                                        <a className="dropdown-item " href="#" onClick={handleDeleteJobOffer}>Remove job offer</a>
                                    </div>
                                    :
                                    applied ?
                                        <a className="dropdown-item " href="/show-my-job-request">See your
                                            application</a>
                                        :
                                        <div>
                                            {!favourite ?
                                                <a className="dropdown-item " href="#" onClick={handleAddToFavourites}>Add
                                                    to favourites</a> :
                                                <a className="dropdown-item " href="#" onClick={handleRemoveFromFavourites}>Remove from favourites</a>}
                                            {(!favourite && !applied) ? <div className="dropdown-divider"/> : <div/>}
                                            {!applied ?
                                                <a className="dropdown-item " href="/apply-for-a-job">Apply for a
                                                    job</a> : <div/>}
                                        </div>
                                }
                            </div>
                        </div>
                    )
                    :
                    null
                }
            </div>
        </div>
    )

}
