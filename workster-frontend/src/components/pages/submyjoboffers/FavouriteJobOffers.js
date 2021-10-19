import {faBars, faDiceThree, faHome, faMapMarker, faMoneyBill, faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../../../assets/styles/my-job-offers.css"

export default function FavouriteJobOffers() {

    return (
        <main>
            <div className="container ">
                <div className="row pt-2">
                    <div className=" col-lg-8 mx-auto ">
                        <div className="card-box d-flex justify-content-center bg-dark">
                            <p className="h3 text-info">Favourite job offers</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-0">
                    <div className="col-lg-8 mx-auto">

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
                                        <div>
                                            <small>01.01.2021</small>
                                            <a href="#" className="text-dark"><FontAwesomeIcon icon={faBars} className="fav-job-options-icon"/></a>
                                        </div>
                                    </div>
                                    <small>
                                        <FontAwesomeIcon icon={faMapMarker} className="fav-job-offers-icons-right"/>Warsaw
                                        <FontAwesomeIcon icon={faMoneyBill} className="fav-job-offers-icons-left fav-job-offers-icons-right"/> 10.000$-20.000$
                                        <FontAwesomeIcon icon={faHome} className="fav-job-offers-icons-left fav-job-offers-icons-right"/>Remote
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
                                        <div>
                                            <small>01.01.2021</small>
                                            <a href="#" className="text-dark"><FontAwesomeIcon icon={faBars} className="fav-job-options-icon"/></a>
                                        </div>
                                    </div>
                                    <small>
                                        <FontAwesomeIcon icon={faMapMarker} className="fav-job-offers-icons-right"/>Warsaw
                                        <FontAwesomeIcon icon={faMoneyBill} className="fav-job-offers-icons-left fav-job-offers-icons-right"/> 10.000$-20.000$
                                        <FontAwesomeIcon icon={faHome} className="fav-job-offers-icons-left fav-job-offers-icons-right"/>Remote
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
                                        <div>
                                            <small>01.01.2021</small>
                                            <a href="#" className="text-dark"><FontAwesomeIcon icon={faBars} className="fav-job-options-icon"/></a>
                                        </div>
                                    </div>
                                    <small>
                                        <FontAwesomeIcon icon={faMapMarker} className="fav-job-offers-icons-right"/>Warsaw
                                        <FontAwesomeIcon icon={faMoneyBill} className="fav-job-offers-icons-left fav-job-offers-icons-right"/> 10.000$-20.000$
                                        <FontAwesomeIcon icon={faHome} className="fav-job-offers-icons-left fav-job-offers-icons-right"/>Remote
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
                                        <div>
                                            <small>01.01.2021</small>
                                            <a href="#" className="text-dark"><FontAwesomeIcon icon={faBars} className="fav-job-options-icon"/></a>
                                        </div>
                                    </div>
                                    <small>
                                        <FontAwesomeIcon icon={faMapMarker} className="fav-job-offers-icons-right"/>Warsaw
                                        <FontAwesomeIcon icon={faMoneyBill} className="fav-job-offers-icons-left fav-job-offers-icons-right"/> 10.000$-20.000$
                                        <FontAwesomeIcon icon={faHome} className="fav-job-offers-icons-left fav-job-offers-icons-right"/>Remote
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