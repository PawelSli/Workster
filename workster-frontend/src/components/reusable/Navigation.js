import React, {useEffect, useState} from "react";

import logo from '../../assets/img/logo.svg';
import Avatar from "@mui/material/Avatar";

import {DropdownButton, Dropdown} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import AuthService from "../../services/auth.service"


export default function Navigation() {

    const [addDropdown, setAddDropdown] = useState(false);
    const [companyDropdown, setCompanyDropdown] = useState(false);
    const [adminDropdown, setAdminDropdown] = useState(false);
    const [jobOfferDropdown, setJobOfferDropdown] = useState(false);
    const [currentUser, setCurrentUser] = useState(false);
    const [admin, setAdmin] = useState(false);

    const history = useHistory();

    const routeChange = (string) => {
        history.push(string);
    };

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
            if (user.roles.includes("ROLE_ADMIN")) {
                setAdmin(true)
            }
        }
    });

    return (
        <nav className="navbar navbar-light navbar-expand-md bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="/" id="nav-logo">
                    <img className="nav-icon" src={logo} alt=""/>orkster
                </a>
                <button data-bs-toggle="collapse" className="navbar-toggler bg-light" data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    {currentUser && (
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link active link-navbar" href="#"
                                   onClick={() => setJobOfferDropdown(!jobOfferDropdown)}>My job offers</a>
                                <div className={`dropdown-menu ${jobOfferDropdown ? 'show' : ''}`}
                                     aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/favourite-job-offers">Favourite job offers</a>
                                    <a className="dropdown-item" href="/applied-job-offers">Applied job offers</a>
                                    <a className="dropdown-item" href="/posted-job-offers">My job offers</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link link-navbar" href="#"
                                   onClick={() => setCompanyDropdown(!companyDropdown)}>My companies</a>
                                <div className={`dropdown-menu ${companyDropdown ? 'show' : ''}`}
                                     aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/company">Company 1</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link link-navbar" href="#"
                                   onClick={() => setAddDropdown(!addDropdown)}>Add...</a>
                                <div className={`dropdown-menu ${addDropdown ? 'show' : ''}`}
                                     aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/add-job-offer">... job offer</a>
                                    <a className="dropdown-item" href="/add-company">... company</a>
                                </div>
                            </li>
                            {admin && (
                                <li className="nav-item dropdown">
                                    <a className="nav-link link-navbar" href="#"
                                       onClick={() => setAdminDropdown(!adminDropdown)}>Admin panel</a>
                                    <div className={`dropdown-menu ${adminDropdown ? 'show' : ''}`}
                                         aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/delete-user">Delete user</a>
                                        <a className="dropdown-item" href="/delete-company">Delete company</a>
                                    </div>
                                </li>
                            )}
                        </ul>
                    )}
                    <ul className="navbar-nav ms-auto">
                        {!currentUser && (
                            <li className="nav-item"><a className="nav-link active" href="#">
                                <button className="btn btn-outline-primary swing animated" type="button"
                                        onClick={() => routeChange("/login")}>Log In
                                </button>
                            </a></li>
                        )}
                        {!currentUser && (
                            <li className="nav-item"><a className="nav-link active" href="#">
                                <button className="btn btn-primary swing animated" type="button"
                                        onClick={() => routeChange("/register")}>Sign Up
                                </button>
                            </a></li>
                        )}
                        {currentUser && (
                            <li className="nav-item dropdown">
                                <Dropdown id="dropdown-basic">
                                    <Dropdown.Toggle variant="black" id="dropdown-basic">
                                        <Avatar alt="Travis Howard" src={`${process.env.PUBLIC_URL}/star-sky.jpg`}/>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/profile/main">Profile</Dropdown.Item>
                                        <Dropdown.Item href="/profile/files">Files</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {
                                            AuthService.logout();
                                            window.location.reload();
                                        }}>Log out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}