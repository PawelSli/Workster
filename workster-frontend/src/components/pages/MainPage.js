import IonRangeSlider from 'react-ion-slider';
import React, {useEffect, useMemo, useRef, useState} from "react";
import $ from 'jquery';
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import axios from 'axios'
import "../../assets/styles/main-style.css"

export default function MainPage() {
    window.$ = $;

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];


    useEffect(() => {

        const script = document.createElement('script');
        script.innerHTML = "$('#demo_1').ionRangeSlider({type: 'double',grid: true,min: 0,max: 1000,from: 200,to: 800,prefix: '$'})"
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);


    return  (
            <main className="page landing-page main-jobs-color-background">
                <div className="container  p-1 mt-3 ">
                    <div className="row shadow-lg ml-1 mr-1">
                        <div className="col-12 card p-5 ">
                            <div className="row  ">
                                <div className="col-md-6 col-lg-3">
                                    <CreatableMultiSearch valueOptions={options} text={"Select keywords"}/>
                                </div>
                                <div className="col-md-6 col-lg-3 pt-3 pt-md-0">
                                    <CreatableMultiSearch valueOptions={options} text={"Select countries"}/>
                                </div>
                                <div className="col-md-6 col-lg-3 pt-3 pt-lg-0">
                                    <CreatableMultiSearch valueOptions={options} text={"Select states"}/>
                                </div>
                                <div className="col-md-6 col-lg-3 pt-3 pt-lg-0">
                                    <CreatableMultiSearch valueOptions={options} text={"Select cities"}/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="form-group col-lg-8 ">
                                    <label htmlFor="double-slider" className="pb-3">Salary</label>
                                    <input type="text" className="js-range-slider " id="demo_1" name="my_range"
                                           value=""/>
                                </div>
                                <div className="col-md-2 d-flex align-items-center justify-content-lg-center  pt-3">
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Remote</label>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                </div>
                                <div className="col-md-10 col-lg-2 d-flex justify-content-center align-items-center pt-3">
                                    <button type="button" className="btn btn-primary btn-block my-button-class">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5 ">

                    <div className="row ">
                        <div className="col-lg-10 mx-auto ">

                            <ul className="list-group shadow-lg">

                                <li className="list-group-item d-flex flex-reverse ">
                                    <img src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Generic placeholder image"
                                         className="logo-size"/>
                                    <div className="job-desc d-flex flex-column justify-content-between">
                                        <div className="d-flex flex-row justify-content-between">
                                            <div>
                                                <h5 className="font-weight-bold m-company">Junior Java Developer</h5>
                                                <small>Brown Brothers Harriman</small>
                                            </div>
                                            <small>01.01.2021</small>
                                        </div>
                                        <small>
                                            <i className="fas fa-map-marker-alt"></i> Warsaw
                                            <i className="fas fa-money-bill location-style"></i> 10.000$-20.000$
                                            <i className="fas fa-home location-style"></i>
                                            Remote job
                                        </small>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex flex-reverse ">
                                    <img src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Generic placeholder image"
                                         className="logo-size"/>
                                    <div className="job-desc d-flex flex-column justify-content-between">
                                        <div className="d-flex flex-row justify-content-between">
                                            <div>
                                                <h5 className="font-weight-bold m-company">DevOps Engineer</h5>
                                                <small>Microsoft</small>
                                            </div>
                                            <small>02.11.1998</small>
                                        </div>
                                        <small>
                                            <i className="fas fa-map-marker-alt"></i> London
                                            <i className="fas fa-money-bill location-style"></i> 5.000$
                                        </small>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex flex-reverse ">
                                    <img src={`${process.env.PUBLIC_URL}/star-sky.jpg`} alt="Generic placeholder image"
                                         className="logo-size"/>
                                    <div className="job-desc d-flex flex-column justify-content-between">
                                        <div className="d-flex flex-row justify-content-between">
                                            <div>
                                                <h5 className="font-weight-bold m-company">Salesforce Developer</h5>
                                                <small>Sabre</small>
                                            </div>
                                            <small>10.10.2010</small>
                                        </div>
                                        <small>
                                            <i className="fas fa-map-marker-alt"></i> Paris
                                            <i className="fas fa-money-bill location-style"></i> 15.000$-17.000$
                                            <i className="fas fa-home location-style"></i>
                                            Remote job
                                        </small>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex flex-reverse ">
                                    <img src={`${process.env.PUBLIC_URL}/star-sky.jpg`}
                                         alt="Generic placeholder image" className="logo-size"/>
                                    <div className="job-desc d-flex flex-column justify-content-between">
                                        <div className="d-flex flex-row justify-content-between">
                                            <div>
                                                <h5 className="font-weight-bold m-company">Business Analytyst in Global
                                                    Team</h5>
                                                <small>Volvo Group</small>
                                            </div>
                                            <small>12.12.2012</small>
                                        </div>
                                        <small>
                                            <i className="fas fa-map-marker-alt"></i> New York
                                            <i className="fas fa-money-bill location-style"></i> 5.000$
                                            <i className="fas fa-home location-style"></i>
                                            Remote job
                                        </small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </main>
        )
}