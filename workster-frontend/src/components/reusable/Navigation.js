import React from "react";

import logo from '../../assets/img/logo.svg';

export default function Navigation() {
    return (
        <nav className="navbar navbar-light navbar-expand-md bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand logo" id="nav-logo" href="#">
                    <img className="nav-icon" src={logo} alt=""/>orkster
                </a>
                <button data-bs-toggle="collapse" className="navbar-toggler bg-light" data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav">
                        <li className="nav-item border-danger"><a className="nav-link active link-navbar"
                                                                  href="#">Tips&amp;Tricks</a></li>
                        <li className="nav-item"><a className="nav-link link-navbar" href="#">Salary calculator</a></li>
                        <li className="nav-item"><a className="nav-link link-navbar" href="#">For companies</a></li>
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