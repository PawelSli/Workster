import React, {useState} from "react";

import logo from '../../assets/img/logo.svg';

export default function Navigation() {

    const [addDropdown, setAddDropdown] = useState(false);
    const [jobOfferDropdown, setJobOfferDropdown] = useState(false);

    return (
        <nav className="navbar navbar-light navbar-expand-md bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand logo" id="nav-logo" href="#">
                    <img className="nav-icon" src={logo} alt=""/>orkster
                </a>
                <button data-bs-toggle="collapse" className="navbar-toggler bg-light" data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link active link-navbar" href="#" onClick={() => setJobOfferDropdown(!jobOfferDropdown)}>My job offers</a>
                            <div className={`dropdown-menu ${jobOfferDropdown ? 'show' : ''}`}
                                 aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Favourite job offers</a>
                                <a className="dropdown-item" href="#">Applied job offers</a>
                                <a className="dropdown-item" href="#">My job offers</a>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link link-navbar" href="#">Company</a></li>
                        <li className="nav-item"><a className="nav-link link-navbar" href="#">Files</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link link-navbar" href="#" onClick={() => setAddDropdown(!addDropdown)}>Add...</a>
                            <div className={`dropdown-menu ${addDropdown ? 'show' : ''}`}
                                 aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">... job offer</a>
                                <a className="dropdown-item" href="#">... company</a>
                                <a className="dropdown-item" href="#">... file</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link active" href="#">
                            <button className="btn btn-outline-primary swing animated" type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#signup">Log In
                            </button>
                        </a></li>
                        <li className="nav-item"><a className="nav-link active" href="#">
                            <button className="btn btn-primary swing animated" type="button" data-bs-toggle="modal"
                                    data-bs-target="#signin">Sign Up
                            </button>
                        </a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}