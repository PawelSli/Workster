import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import React, {useEffect} from "react";
import $ from "jquery";
import "../../assets/styles/admin.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown, faSearchPlus, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function DeleteUser() {

    window.$ = $;

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];


    return (
        <main className="page landing-page main-jobs-color-background">
            <div className="container  p-1 mt-3 ">
                <div className="row  ml-1 mr-1">
                    <div className="col-12 card p-5 shadow-lg">
                        <div className="row  ">
                            <div className="col-12 col-md-6">
                                <CreatableMultiSearch valueOptions={options} text={"Select name"}/>
                            </div>
                            <div className="col-12 mt-3 mt-md-0 col-md-6">
                                <CreatableMultiSearch valueOptions={options} text={"Select email"}/>
                            </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-end">
                            <button type="button" className="btn btn-primary search-user-button">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-1 mt-3 ">
                <div className="row p-2">
                    <div className="col-6 col-md-4 col-xl-3 mt-4 ">
                        <div className="card shadow-lg" >
                            <img className="card-img-top img-fluid user-photo-company" src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">John Kowalski</h5>
                                <small>Junior Java Developer</small>
                                <br/>
                                <small>Status: Admin</small>
                                <br/>
                                <small>Created: 01/01/2021</small>
                            </div>
                            <div className="card-body d-flex justify-content-evenly">
                                <FontAwesomeIcon icon={faSearchPlus}/>
                                <FontAwesomeIcon icon={faCrown} className="text-info"/>
                                <FontAwesomeIcon icon={faTrash} className="text-danger"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3 mt-4">
                        <div className="card shadow-lg" >
                            <img className="card-img-top img-fluid user-photo-company" src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">John Kowalski</h5>
                                <small>Junior Java Developer</small>
                                <br/>
                                <small>Status: Admin</small>
                                <br/>
                                <small>Created: 01/01/2021</small>
                            </div>
                            <div className="card-body d-flex justify-content-evenly">
                                <FontAwesomeIcon icon={faSearchPlus}/>
                                <FontAwesomeIcon icon={faCrown}/>
                                <FontAwesomeIcon icon={faTrash}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3 mt-4">
                        <div className="card shadow-lg" >
                            <img className="card-img-top img-fluid user-photo-company" src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">John Kowalski</h5>
                                <small>Junior Java Developer</small>
                                <br/>
                                <small>Status: Admin</small>
                                <br/>
                                <small>Created: 01/01/2021</small>
                            </div>
                            <div className="card-body d-flex justify-content-evenly">
                                <FontAwesomeIcon icon={faSearchPlus}/>
                                <FontAwesomeIcon icon={faCrown}/>
                                <FontAwesomeIcon icon={faTrash}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3 mt-4">
                        <div className="card shadow-lg" >
                            <img className="card-img-top img-fluid user-photo-company" src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">John Kowalski</h5>
                                <small>Junior Java Developer</small>
                                <br/>
                                <small>Status: Admin</small>
                                <br/>
                                <small>Created: 01/01/2021</small>
                            </div>
                            <div className="card-body d-flex justify-content-evenly">
                                <FontAwesomeIcon icon={faSearchPlus}/>
                                <FontAwesomeIcon icon={faCrown}/>
                                <FontAwesomeIcon icon={faTrash}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3 mt-4">
                        <div className="card shadow-lg" >
                            <img className="card-img-top img-fluid user-photo-company" src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">John Kowalski</h5>
                                <small>Junior Java Developer</small>
                                <br/>
                                <small>Status: Admin</small>
                                <br/>
                                <small>Created: 01/01/2021</small>
                            </div>
                            <div className="card-body d-flex justify-content-evenly">
                                <FontAwesomeIcon icon={faSearchPlus}/>
                                <FontAwesomeIcon icon={faCrown}/>
                                <FontAwesomeIcon icon={faTrash}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3 mt-4">
                        <div className="card shadow-lg" >
                            <img className="card-img-top img-fluid user-photo-company" src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">John Kowalski</h5>
                                <small>Junior Java Developer</small>
                                <br/>
                                <small>Status: Admin</small>
                                <br/>
                                <small>Created: 01/01/2021</small>
                            </div>
                            <div className="card-body d-flex justify-content-evenly">
                                <FontAwesomeIcon icon={faSearchPlus}/>
                                <FontAwesomeIcon icon={faCrown}/>
                                <FontAwesomeIcon icon={faTrash}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3 mt-4">
                        <div className="card shadow-lg" >
                            <img className="card-img-top img-fluid user-photo-company" src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">John Kowalski</h5>
                                <small>Junior Java Developer</small>
                                <br/>
                                <small>Status: Admin</small>
                                <br/>
                                <small>Created: 01/01/2021</small>
                            </div>
                            <div className="card-body d-flex justify-content-evenly">
                                <FontAwesomeIcon icon={faSearchPlus}/>
                                <FontAwesomeIcon icon={faCrown}/>
                                <FontAwesomeIcon icon={faTrash}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}