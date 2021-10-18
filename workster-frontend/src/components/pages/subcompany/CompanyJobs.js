import IonRangeSlider from 'react-ion-slider';
import {useEffect} from "react";
import $ from 'jquery';
import CreatableMultiSearch from "../../reusable/CreatableMultiSearch";
import "../../../assets/styles/company-jobs.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle, faDownload, faMapMarkerAlt, faMoneyBill, faHome} from '@fortawesome/free-solid-svg-icons'

export default function CompanyJob() {
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
        <main className="page landing-page">
            <div className="container-fluid bg-light">
                <div className="row align-items-center justify-content-left">
                    <div className="col-md-3 pt-3">
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Type name of a job"/>
                        </div>
                    </div>
                    <div className="col-md-3 pt-3">
                        <CreatableMultiSearch valueOptions={options}/>
                    </div>
                    <div className="col-md-1 pt-3 ">
                        <button type="button" className="btn btn-primary btn-block my-button-class search-button-company">Search</button>
                    </div>
                    <div className="col-md-2 pt-3 ">
                        <button type="button" className="btn btn-secondary btn-block my-button-class"
                                data-bs-toggle="collapse" href="#collapseExample">
                            <i className="fas fa-chevron-down"/>
                            More filters
                        </button>

                    </div>
                </div>
            </div>
            <div id="collapseExample" className="container-fluid bg-light">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-4 pt-3">
                        <div className="form-group ">
                            <label htmlFor="double-slider">Salary</label>
                            <input type="text" className="js-range-slider" id="demo_1" name="my_range" value=""/>
                        </div>
                    </div>
                    <div className="col-md-3 pt-3">
                        <div className="form-group">
                            <CreatableMultiSearch valueOptions={options}/>
                        </div>
                    </div>
                    <div className="col-md-3 pt-3">
                        <div className="form-group">
                            <CreatableMultiSearch valueOptions={options}/>
                        </div>
                    </div>
                    <div className="col-md-2 pt-3">
                        <label className="form-check-label" htmlFor="flexCheckDefault">Remote job</label>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    </div>
                </div>
            </div>
            <div className="container py-5">

                <div className="row">
                    <div className="col-12 col-md-11 mx-auto">

                        <ul className="list-group shadow">

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
                                        <i className="fas fa-map-marker-alt"></i>Warsaw
                                        <br/>
                                        <i className="fas fa-money-bill location-style"></i>10.000$-20.000$
                                        <br />
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
                                        <FontAwesomeIcon icon={faMapMarkerAlt}/> Paris
                                        <FontAwesomeIcon icon={faMoneyBill}/> 15.000$-17.000$
                                        <FontAwesomeIcon icon={faHome}/>Remote job
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
    );

}