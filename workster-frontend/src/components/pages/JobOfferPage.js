import IonRangeSlider from 'react-ion-slider';
import {useEffect} from "react";
import $ from 'jquery';
import CreatableMultiSearch from "../reusable/CreatableMultiSearch";

export default function JobOfferPage() {
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
                        <button type="button" className="btn btn-primary btn-block my-button-class">Search</button>
                    </div>
                    <div className="col-md-2 pt-3 ">
                        <button type="button" className="btn btn-secondary btn-block "
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
            <div className="row">
                <div className="col-lg-8 mx-auto shadow ">
                    <div className="mt-2 image-wrapper">

                        <a className="image-wrapper image-zoom cboxElement" href="#">
                            <img src="https://via.placeholder.com/700x250/FF69B4/000000" alt="Photo of Blog"
                                 className="margin-auto job-desc-img"></img>
                            <div className="image-overlay"></div>
                        </a>
                    </div>
                    <h4 className="display-6 m-company mt-1">Junior Java Developer</h4>
                    <h5 className="lead m-company mt-1">Brown Brothers Harriman</h5>

                    <h6 className="text-muted mt-4"><i className="fas fa-map-marker-alt location-style"></i>Location:
                        Warsaw</h6>
                    <h6 className="text-muted "><i className="fas fa-industry location-style"></i>Branch: Information
                        Technology</h6>
                    <h6 className="text-muted "><i className="fas fa-money-bill location-style"></i>Salary: 10.000 -
                        12.500 $</h6>
                    <h6 className="text-muted "><i className="fas fa-home location-style"></i> Remote</h6>
                    <div className="d-flex flex-row  mt-2">
                        <button type="button" className="btn btn-dark  apply-button">Apply for a job</button>
                        <button type="button" className="btn btn-secondary  apply-button ">Save a post</button>
                    </div>

                    <p className="h5 text-center mt-5">Job requirements</p>
                    <ul>
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                        <li>Ac tristique libero volutpat at</li>
                    </ul>
                    <p className="h5 text-center mt-5">What we offer</p>
                    <ul>
                        <li>Young, dynamic team</li>
                        <li>High salary</li>
                        <li>Tuesdays with fruits</li>
                        <li>Possibility to communicate with best developers in this branch in the country</li>
                    </ul>
                    <p className="h5 text-center mt-5">About a company</p>
                    Brown Brothers Harriman & Co. (BBH) is the oldest and one of the largest private investment banks in
                    the United States.[3][4] In 1931, the merger of Brown Brothers & Co. (founded in 1818) and Harriman
                    Brothers & Co. formed the current BBH.

                    Brown Brothers Harriman is also notable for the number of influential American politicians,
                    government appointees, and Cabinet members who have worked at the company, such as W. Averell
                    Harriman, Prescott Bush, Robert A. Lovett, Richard W. Fisher, Robert Roosa, and Alan Greenspan.
                    <p className="h5 text-center mt-5">Tags:</p>
                    <div className="badges-class">
                        <span className="badge bg-primary">Java</span>
                        <span className="badge bg-primary">Python</span>
                        <span className="badge bg-primary">IT</span>
                        <span className="badge bg-primary">Warsaw</span>
                        <span className="badge bg-primary">Programmer</span>
                    </div>
                </div>
            </div>
        </main>
    );

}