import {faBars, faDiceThree, faHome, faMapMarker, faMoneyBill, faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../../../assets/styles/my-job-offers.css"
import JobOfferListElement from "../../reusable/JobOfferListElement";
import React from "react";

export default function FavouriteJobOffers() {

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
                        <JobOfferListElement image="red.jpg" title="Level Designer" company="CD Projekt RED" location="Warsaw, Mazowieckie, Poland" cash="10.000 $" remote="remote" date="10.01.2022"/>
                        <JobOfferListElement image="sabre.jpg" title="Junior Java Developer" company="Sabre" location="Cracow, Mazowieckie, Poland" cash="15.000 $" remote="remote" date="16.02.2017"/>
                        <JobOfferListElement image="microsoft.png" title="Junior .NET Developer" company="Sabre" location="London, Great Britain" cash="20.000 $" remote="remote" date="10.01.2019"/>
                        <JobOfferListElement image="ibm.jpg" title="Senior Remote DevOps" company="IBM" location="Boston, USA" cash="23.000 $" remote="remote" date="13.05.2022"/>
                    </div>
                </div>
            </div>
        </main>
    )

}