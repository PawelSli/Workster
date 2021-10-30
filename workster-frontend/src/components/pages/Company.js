import "../../assets/styles/company.css"
import logo from "../../assets/img/logo.svg";
import React, {useState} from "react";
import CompanySubPage from "./subcompany/CompanySubPage";
import CompanyHeader from "../reusable/CompanyHeader";
import "../../assets/styles/my-job-offer.css"

export default function Company() {

    const [subPage, setSubPage] = useState(0);

    return (
        <main>
            <CompanyHeader image="star-sky.jpg" name="Atos Poland Global Services Sp. z o.o."/>
            <div className="row mt-2 d-flex justify-content-center">
                <div className="col-12 col-md-8 card bg-dark">
                    <nav className="navbar navbar-light navbar-expand-md  shadow-lg">
                        <div className="container-fluid">
                            <button data-bs-toggle="collapse" className="navbar-toggler bg-light"
                                    data-bs-target="#navcol-3">
                                <span className="visually-hidden">Toggle navigation</span><span
                                className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navcol-3">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a className="nav-link active text-white"
                                                                onClick={() => setSubPage(0)}
                                                                href="#">Description</a></li>
                                    <li className="nav-item"><a className="nav-link text-white"
                                                                onClick={() => setSubPage(1)} href="#">Job
                                        offers</a></li>
                                    <li className="nav-item"><a className="nav-link text-white"
                                                                onClick={() => setSubPage(2)} href="#">Company users
                                    </a></li>
                                    <li className="nav-item"><a className="nav-link text-white"
                                                                onClick={() => setSubPage(3)} href="#">Candidates
                                    </a></li>
                                    <li className="nav-item"><a className="nav-link text-white"
                                                                onClick={() => setSubPage(4)} href="#">Edit company information
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row mt-2 mb-3 d-flex justify-content-center">
                <div className="col-12 col-md-8  card shadow-lg">
                    <CompanySubPage subPage={subPage}/>
                </div>
            </div>
        </main>
    )
}