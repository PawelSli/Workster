import {faBars, faDiceThree, faHome, faMapMarker, faMoneyBill, faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../../../assets/styles/my-job-offers.css"
import JobOfferListElement from "../../reusable/JobOfferListElement";
import React, {useEffect, useState} from "react";
import JobService from "../../../services/job.service";

export default function FavouriteJobOffers() {

    const [jobOffers, setJobOffers] = useState([]);
    const [message, setMessage] = useState('');
    const [successful, setSuccessful] = useState(false);

    const getFavouriteJobOffers = () => {
        setMessage('');
        setSuccessful(false);
        JobService.getAllFavouriteJobOffers().then(
            result => {
                setJobOffers(result.data.jobOffers);
            },
            error => {
                console.log(error);
            }
        );
    };

    useEffect(() => {
        getFavouriteJobOffers();
    }, []);

    return (
        <main>
            <div className="container ">
                <div className="row pt-2">
                    <div className=" col-lg-11 mx-auto ">
                        <div className="card-box d-flex justify-content-center bg-dark">
                            <p className="h3 text-white">Favourite job offers</p>
                        </div>
                    </div>
                </div>
                <div className="container  ">
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
                            jobOffers.map((item) => (
                                <JobOfferListElement id={item.id} image={item.companyImage} title={item.title}
                                                     location={item.location}
                                                     remote={item.remote} higherGap={item.salary_high}
                                                     lowerGap={item.salary_low}
                                                     date={item.createdAt} owner={item.owner} applied={item.applied}
                                                     favourite={item.favourite} setMessage={setMessage}
                                                     setSuccessfull={setSuccessful}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )

}