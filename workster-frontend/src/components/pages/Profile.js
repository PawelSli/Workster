import "../../assets/styles/profile.css"
import React, {useState} from "react";
import SubProfile from "./subprofile/SubProfile";

export default function Profile() {

    const [addDropdown, setAddDropdown] = useState(false);
    const [jobOfferDropdown, setJobOfferDropdown] = useState(false);


    return (
        <div className="">
            <nav className="navbar navbar-light navbar-expand-md navbar-fixed-top sticky-top bg-secondary">
                <div className="container-fluid ">
                    <button data-bs-toggle="collapse" className="navbar-toggler bg-light " data-bs-target="#navcol-2">
                        <span className="visually-hidden">Toggle navigation</span><span
                        className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-2">
                        <ul className="navbar-nav second-navbar-nav">
                            <li className="nav-item pl-2">
                                <a className="nav-link active link-navbar " href="#">Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-navbar " href="#">Files</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-navbar " href="#">Company</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle link-navbar" href="#" id="navbarDropdown"
                                   role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                   onClick={() => setJobOfferDropdown(!jobOfferDropdown)}>
                                    My job offers
                                </a>
                                <div className={`dropdown-menu ${jobOfferDropdown ? 'show' : ''}`}
                                     aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Favourite job offers</a>
                                    <a className="dropdown-item" href="#">Applied job offers</a>
                                    <a className="dropdown-item" href="#">My job offers</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle link-navbar" href="#" id="navbarDropdown"
                                   role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                   onClick={() => setAddDropdown(!addDropdown)}>
                                    Add...
                                </a>
                                <div className={`dropdown-menu ${addDropdown ? 'show' : ''}`}
                                     aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">... job offer</a>
                                    <a className="dropdown-item" href="#">... company</a>
                                    <a className="dropdown-item" href="#">... file</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                        </ul>
                    </div>
                </div>
            </nav>
            <SubProfile/>
        </div>
    )
}