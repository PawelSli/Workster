import React, {useState} from "react";

import logo from '../../assets/img/logo.svg';
import Avatar from "@mui/material/Avatar";
import { DropdownButton,Dropdown } from 'react-bootstrap';

export default function Navigation() {

    const [addDropdown, setAddDropdown] = useState(false);
    const [adminDropdown, setAdminDropdown] = useState(false);
    const [jobOfferDropdown, setJobOfferDropdown] = useState(false);

    return (
        <nav className="navbar navbar-light navbar-expand-md bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="/" id="nav-logo" >
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
                                <a className="dropdown-item" href="/favourite-job-offers">Favourite job offers</a>
                                <a className="dropdown-item" href="/applied-job-offers">Applied job offers</a>
                                <a className="dropdown-item" href="/posted-job-offers">My job offers</a>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link link-navbar" href="#">Company</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link link-navbar" href="#" onClick={() => setAddDropdown(!addDropdown)}>Add...</a>
                            <div className={`dropdown-menu ${addDropdown ? 'show' : ''}`}
                                 aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/add-job-offer">... job offer</a>
                                <a className="dropdown-item" href="/add-company">... company</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link link-navbar" href="#" onClick={() => setAdminDropdown(!adminDropdown)}>Admin panel</a>
                            <div className={`dropdown-menu ${adminDropdown ? 'show' : ''}`}
                                 aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Delete user</a>
                                <a className="dropdown-item" href="#">Delete company</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link active" href="#">
                            <button className="btn btn-outline-primary swing animated" type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="/signin">Log In
                            </button>
                        </a></li>
                        <li className="nav-item"><a className="nav-link active" href="#">
                            <button className="btn btn-primary swing animated" type="button" data-bs-toggle="modal"
                                    data-bs-target="/register">Sign Up
                            </button>
                        </a></li>
                        <li className="nav-item dropdown">
                            <Dropdown id="dropdown-basic">
                                <Dropdown.Toggle variant="black"  id="dropdown-basic">
                                    <Avatar alt="Travis Howard" src={`${process.env.PUBLIC_URL}/star-sky.jpg`}/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/profile/main">Profile</Dropdown.Item>
                                    <Dropdown.Item href="/profile/files">Files</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}