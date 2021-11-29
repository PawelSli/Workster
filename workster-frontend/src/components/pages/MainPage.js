import IonRangeSlider from 'react-ion-slider';
import React, {useEffect, useMemo, useRef, useState} from "react";
import $ from 'jquery';
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";
import axios from 'axios'
import "../../assets/styles/main-style.css"
import {faBars, faCalendar, faHome, faMapMarkerAlt, faMoneyBill, faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import JobOfferListElement from "../reusable/JobOfferListElement";
import JobService from "../../services/job.service"
import PlacesAutocomplete from "react-places-autocomplete";

export default function MainPage() {
    window.$ = $;

    const [jobOffers, setJobOffers] = useState([]);
    const [displayJobOffers, setDisplayJobOffers] = useState([]);
    const [defaultKeyWords, setDefaultKeyWords] = useState([]);
    const [keyWords, setKeyWords] = useState([]);
    const [address, setAddress] = useState("");
    const [remote, setRemote] = useState(false);
    const [gap, setGap] = useState(null);
    const [message, setMessage] = useState('');
    const [successful, setSuccessful] = useState(false);
    const handleSetKeyWords = (selectedOptions) => {
        setKeyWords(selectedOptions);
        console.log(selectedOptions);
    };
    const handleSelect = (value) => {
        setAddress(value);
    };

    const handlePayGap = (value) => {
        setGap(value)
        console.log(value);
    }

    const getJobOffers = () => {
        JobService.getAllJobOffers().then(
            result => {
                let tempTable = result.data.jobOffers;
                setJobOffers(tempTable);
                setDisplayJobOffers(tempTable)
                let tempDefaultKeyWords = tempTable.map((item, index) => (
                    {value: item.title, label: item.title}
                ));
                setDefaultKeyWords(tempDefaultKeyWords);
            },
            error => {
                console.log(error);
            }
        )
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        let clonedDisplayJobOffers = [];
        if (keyWords.length !== 0) {
            [...jobOffers].filter(item => {
                keyWords.forEach(keyWord => {
                    if (keyWord.value.includes(item.title)) {
                        clonedDisplayJobOffers.push(item);
                    }
                });
            });
        } else {
            clonedDisplayJobOffers = [...jobOffers];
        }
        if (address) {
            clonedDisplayJobOffers = clonedDisplayJobOffers.filter(item => item.location.includes(address));
        }
        if (remote) {
            clonedDisplayJobOffers = clonedDisplayJobOffers.filter(item => {
                return item.remote
            });
        }
        if(gap.from_value !== 0){
            clonedDisplayJobOffers = clonedDisplayJobOffers.filter(item => {
                return gap.from_value <= item.salary_high;

            });
        }
        if(gap.to_value !== 10000000){
            clonedDisplayJobOffers = clonedDisplayJobOffers.filter(item => {
                return gap.to_value >= item.salary_low;

            });
        }
        setDisplayJobOffers(clonedDisplayJobOffers);
    };


    useEffect(() => {
        getJobOffers();
    }, []);


    return (
        <main className="page landing-page main-jobs-color-background">
            <div className="container  p-1 mt-3 ">
                <div className="row shadow-lg ml-1 mr-1">
                    <div className="col-12 card p-5 ">
                        <div className="row  ">
                            <div className="col-md-6 ">
                                <CreatableMultiSearch text={"Select keywords"} value={keyWords}
                                                      setValue={handleSetKeyWords} valueOptions={defaultKeyWords}/>
                            </div>
                            <div className="col-md-6  pt-3 pt-md-0">
                                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                                    {
                                        ({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                            <div>
                                                <input {...getInputProps({placeholder: "Type address"})}
                                                       className={"form-control"}/>

                                                <div>
                                                    {loading ? <div>...Loading</div> : null}
                                                    {suggestions.map(suggestion => {

                                                        const style = {
                                                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                                        };

                                                        return <div {...getSuggestionItemProps(suggestion, {style})}>
                                                            {suggestion.description}
                                                        </div>
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    }
                                </PlacesAutocomplete>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="form-group col-lg-8 ">
                                <label htmlFor="double-slider" className="pb-3">Salary</label>
                                <IonRangeSlider type={"double"} from={gap ? gap.from : 0} to={gap ? gap.to : 10000000}
                                                prefix={"$"} values={[0,100,250,500,1000,2500,5000,10000,25000,50000,100000,250000,500000,1000000,2500000,5000000,10000000]}
                                                grid={true} onUpdate={(value) => handlePayGap(value)} value={gap}/>
                            </div>
                            <div className="col-md-2 d-flex align-items-center justify-content-lg-center  pt-3">
                                <label className="form-check-label" htmlFor="flexCheckDefault">Remote</label>
                                <input className="form-check-input" type="checkbox" value={remote}
                                       onChange={(event => setRemote(!remote))} id="flexCheckDefault"/>
                            </div>
                            <div className="col-md-10 col-lg-2 d-flex justify-content-center align-items-center pt-3">
                                <button type="button" className="btn btn-primary btn-block my-button-class"
                                        onClick={handleButtonClick}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-3 mb-5">
                <div className="row d-flex justify-content-center ">
                    {message && (
                        <div className="form-group">
                            <div
                                className={
                                    successful ? "alert alert-success" : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                    {
                        displayJobOffers.map((item) => (
                            <JobOfferListElement image={item.companyImage} title={item.title} location={item.location}
                                                 remote={item.remote} higherGap={item.salary_high}
                                                 lowerGap={item.salary_low}
                                                 date={item.createdAt} owner={item.owner} applied={item.applied}
                                                 favourite={item.favourite} setMessage={setMessage} setSuccessfull={setSuccessful}/>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}