import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCalendar, faHome, faMapMarkerAlt, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/company-jobs-translate.css"

export default function JobOfferListElementForCompanyPage({image, title, company, location, cash, remote, date, favourite, applied, posted}) {

    const [addDropdownElementAction, setAddDropdownElementAction] = useState(false);

    return (
        <div className="col-12 card d-flex flex-row pt-2 pl-1 pb-1 shadow-lg mb-1">
            <div className="container d-flex flex-row">
                <div className="col-11 d-flex flex-row row ">
                    <div className="col-12 ">
                        <h5 className="font-weight-bold text-hidden">
                            {title}
                            <br/>
                            <small className="text-muted">{company}</small>
                        </h5>
                    </div>
                    <div className="row d-flex flex-row ">
                        <div className="col-6 col-md-3 text-hidden">
                            <FontAwesomeIcon className="icon-new-job-offers" icon={faMapMarkerAlt}/>{location}
                        </div>
                        <div className="col-6 col-md-3 text-hidden">
                            <FontAwesomeIcon className="icon-new-job-offers " icon={faMoneyBill}/>{cash}
                        </div>
                        <div className="col-6 col-md-3 text-hidden">
                            <FontAwesomeIcon className="icon-new-job-offers " icon={faHome}/>{remote}
                        </div>
                        <div className="col-6 col-md-3 text-hidden ">
                            <FontAwesomeIcon className="icon-new-job-offers " icon={faCalendar}/>{date}
                        </div>
                    </div>
                </div>
                <div className="col-1  text-end dropdown ">
                    <a href="#" className="nav-link " role="button"
                       onClick={() => setAddDropdownElementAction(!addDropdownElementAction)}>
                        <FontAwesomeIcon className="settings-icon-bars-job-offers-company " icon={faBars}/>
                    </a>
                    <div className={`dropdown-menu dropdown-menu-element ${addDropdownElementAction ? 'show' : ''}`}
                         aria-labelledby="dropdownMenuLink">
                        {posted ?
                            <div>
                                <a className="dropdown-item " href="#">See applications</a>
                                <div className="dropdown-divider"/>
                                <a className="dropdown-item " href="#">Remove job offer</a>
                            </div>
                            :
                            applied ?
                                <a className="dropdown-item " href="#">See your application</a>
                                :
                                <div>
                                    {!favourite ? <a className="dropdown-item " href="#">Add to favourites</a> :
                                        <a className="dropdown-item " href="#">Remove from favourites</a>}
                                    {!applied ? <div className="dropdown-divider"/> : <div/>}
                                    {!applied ? <a className="dropdown-item " href="#">Apply for a job</a> : <div/>}
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}