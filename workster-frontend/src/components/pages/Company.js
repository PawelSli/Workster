import "../../assets/styles/company.css"
import logo from "../../assets/img/logo.svg";
import React, {useState} from "react";
import CompanySubPage from "./subcompany/CompanySubPage";

export default function Company() {

    const [subPage,setSubPage] = useState(0);

    return (
        <main>
            <div className="container clearfix ">
                <div className="row">
                    <div className="col-12 col-md-10 jumbotron">
                        <div className="card d-flex flex-row company-start d-flex justify-content-center">
                            <div className="company-image d-flex justify-content-center">
                                <img src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Generic placeholder image"
                                     className="img-fluid"/>
                            </div>
                            <div className="company-name d-flex align-items-center">
                                <p className="display-5 margin-company-title">Atos Poland Global Services Sp. z o.o.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-10">
                        <div className="card">
                            <nav className="navbar navbar-light navbar-expand-md bg-secondary">
                                <div className="container-fluid">
                                    <button data-bs-toggle="collapse" className="navbar-toggler bg-light"
                                            data-bs-target="#navcol-3">
                                        <span className="visually-hidden">Toggle navigation</span><span
                                        className="navbar-toggler-icon"/>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navcol-3">
                                        <ul className="navbar-nav">
                                            <li className="nav-item"><a className="nav-link active text-black" onClick={()=>setSubPage(0)} href="#">Description</a></li>
                                            <li className="nav-item"><a className="nav-link text-black" onClick={()=>setSubPage(1)} href="#" >Job offers</a></li>
                                            <li className="nav-item"><a className="nav-link text-info"  onClick={()=>setSubPage(2)} href="#">Edit description</a></li>
                                            <li className="nav-item"><a className="nav-link text-info" onClick={()=>setSubPage(3)}  href="#">Manage users</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-3">
                    <div className="col-lg-10 col-md-12 ">
                        <div className="card ">
                            <CompanySubPage subPage={subPage}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}