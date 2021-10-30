import IonRangeSlider from 'react-ion-slider';
import React, {useEffect} from "react";
import $ from 'jquery';
import CreatableMultiSearch from "../../reusable/CreatableMultiSearch";
import "../../../assets/styles/company-jobs.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle, faDownload, faMapMarkerAlt, faMoneyBill, faHome} from '@fortawesome/free-solid-svg-icons'
import JobOfferListElement from "../../reusable/JobOfferListElement";
import JobOfferListElementForCompanyPage from "../../reusable/JobOfferListElementForCompanyPage";

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
        <div className="body p-2 d-flex flex-column align-items-center ">
            <JobOfferListElementForCompanyPage image="red.jpg" title="Level Designer" company="CD Projekt RED" location="Warsaw, Mazowieckie, Poland" cash="10.000 $" remote="remote" date="10.01.2022" favourite="Y" applied="Y"/>
            <JobOfferListElementForCompanyPage image="sabre.jpg" title="Junior Java Developer" company="Sabre" location="Cracow, Mazowieckie, Poland" cash="15.000 $" remote="remote" date="16.02.2017"/>
            <JobOfferListElementForCompanyPage image="microsoft.png" title="Junior .NET Developer" company="Sabre" location="London, Great Britain" cash="20.000 $" remote="remote" date="10.01.2019"/>
            <JobOfferListElementForCompanyPage image="ibm.jpg" title="Senior Remote DevOps" company="IBM" location="Boston, USA" cash="23.000 $" remote="remote" date="13.05.2022"/>
            <JobOfferListElementForCompanyPage image="red.jpg" title="Level Designer" company="CD Projekt RED" location="Warsaw, Mazowieckie, Poland" cash="10.000 $" remote="remote" date="10.01.2022"/>
            <JobOfferListElementForCompanyPage image="sabre.jpg" title="Junior Java Developer" company="Sabre" location="Cracow, Mazowieckie, Poland" cash="15.000 $" remote="remote" date="16.02.2017"/>
            <JobOfferListElementForCompanyPage image="microsoft.png" title="Junior .NET Developer" company="Sabre" location="London, Great Britain" cash="20.000 $" remote="remote" date="10.01.2019"/>
            <JobOfferListElementForCompanyPage image="ibm.jpg" title="Senior Remote DevOps" company="IBM" location="Boston, USA" cash="23.000 $" remote="remote" date="13.05.2022"/>
            <JobOfferListElementForCompanyPage image="red.jpg" title="Level Designer" company="CD Projekt RED" location="Warsaw, Mazowieckie, Poland" cash="10.000 $" remote="remote" date="10.01.2022"/>
            <JobOfferListElementForCompanyPage image="sabre.jpg" title="Junior Java Developer" company="Sabre" location="Cracow, Mazowieckie, Poland" cash="15.000 $" remote="remote" date="16.02.2017"/>
            <JobOfferListElementForCompanyPage image="microsoft.png" title="Junior .NET Developer" company="Sabre" location="London, Great Britain" cash="20.000 $" remote="remote" date="10.01.2019"/>
            <JobOfferListElementForCompanyPage image="ibm.jpg" title="Senior Remote DevOps" company="IBM" location="Boston, USA" cash="23.000 $" remote="remote" date="13.05.2022"/>
            <JobOfferListElementForCompanyPage image="red.jpg" title="Level Designer" company="CD Projekt RED" location="Warsaw, Mazowieckie, Poland" cash="10.000 $" remote="remote" date="10.01.2022"/>
            <JobOfferListElementForCompanyPage image="sabre.jpg" title="Junior Java Developer" company="Sabre" location="Cracow, Mazowieckie, Poland" cash="15.000 $" remote="remote" date="16.02.2017"/>
            <JobOfferListElementForCompanyPage image="microsoft.png" title="Junior .NET Developer" company="Sabre" location="London, Great Britain" cash="20.000 $" remote="remote" date="10.01.2019"/>
            <JobOfferListElementForCompanyPage image="ibm.jpg" title="Senior Remote DevOps" company="IBM" location="Boston, USA" cash="23.000 $" remote="remote" date="13.05.2022"/>
        </div>
    );

}