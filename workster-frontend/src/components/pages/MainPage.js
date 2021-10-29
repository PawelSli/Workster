import IonRangeSlider from 'react-ion-slider';
import React, {useEffect, useMemo, useRef, useState} from "react";
import $ from 'jquery';
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import axios from 'axios'
import "../../assets/styles/main-style.css"
import {faBars, faCalendar, faHome, faMapMarkerAlt, faMoneyBill, faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import JobOfferListElement from "../reusable/JobOfferListElement";

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


    return (
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
                                <button type="button" className="btn btn-primary btn-block my-button-class">Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-3 mb-5">
                <div className="row d-flex justify-content-center ">
                    <JobOfferListElement image="red.jpg" title="Level Designer" company="CD Projekt RED" location="Warsaw, Mazowieckie, Poland" cash="10.000 $" remote="remote" date="10.01.2022" favourite="Y" applied="Y"/>
                    <JobOfferListElement image="sabre.jpg" title="Junior Java Developer" company="Sabre" location="Cracow, Mazowieckie, Poland" cash="15.000 $" remote="remote" date="16.02.2017"/>
                    <JobOfferListElement image="microsoft.png" title="Junior .NET Developer" company="Sabre" location="London, Great Britain" cash="20.000 $" remote="remote" date="10.01.2019"/>
                    <JobOfferListElement image="ibm.jpg" title="Senior Remote DevOps" company="IBM" location="Boston, USA" cash="23.000 $" remote="remote" date="13.05.2022"/>
                    <JobOfferListElement image="red.jpg" title="Level Designer" company="CD Projekt RED" location="Warsaw, Mazowieckie, Poland" cash="10.000 $" remote="remote" date="10.01.2022"/>
                    <JobOfferListElement image="sabre.jpg" title="Junior Java Developer" company="Sabre" location="Cracow, Mazowieckie, Poland" cash="15.000 $" remote="remote" date="16.02.2017"/>
                    <JobOfferListElement image="microsoft.png" title="Junior .NET Developer" company="Sabre" location="London, Great Britain" cash="20.000 $" remote="remote" date="10.01.2019"/>
                    <JobOfferListElement image="ibm.jpg" title="Senior Remote DevOps" company="IBM" location="Boston, USA" cash="23.000 $" remote="remote" date="13.05.2022"/>
                    <JobOfferListElement image="red.jpg" title="Level Designer" company="CD Projekt RED" location="Warsaw, Mazowieckie, Poland" cash="10.000 $" remote="remote" date="10.01.2022"/>
                    <JobOfferListElement image="sabre.jpg" title="Junior Java Developer" company="Sabre" location="Cracow, Mazowieckie, Poland" cash="15.000 $" remote="remote" date="16.02.2017"/>
                    <JobOfferListElement image="microsoft.png" title="Junior .NET Developer" company="Sabre" location="London, Great Britain" cash="20.000 $" remote="remote" date="10.01.2019"/>
                    <JobOfferListElement image="ibm.jpg" title="Senior Remote DevOps" company="IBM" location="Boston, USA" cash="23.000 $" remote="remote" date="13.05.2022"/>
                    <JobOfferListElement image="red.jpg" title="Level Designer" company="CD Projekt RED" location="Warsaw, Mazowieckie, Poland" cash="10.000 $" remote="remote" date="10.01.2022"/>
                    <JobOfferListElement image="sabre.jpg" title="Junior Java Developer" company="Sabre" location="Cracow, Mazowieckie, Poland" cash="15.000 $" remote="remote" date="16.02.2017"/>
                    <JobOfferListElement image="microsoft.png" title="Junior .NET Developer" company="Sabre" location="London, Great Britain" cash="20.000 $" remote="remote" date="10.01.2019"/>
                    <JobOfferListElement image="ibm.jpg" title="Senior Remote DevOps" company="IBM" location="Boston, USA" cash="23.000 $" remote="remote" date="13.05.2022"/>
                </div>
            </div>
        </main>
    )
}