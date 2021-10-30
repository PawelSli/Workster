import React from "react";
import FavouriteJobOffers from "../submyjoboffers/FavouriteJobOffers";
import CompanyRecruiters from "./CompanyRecruiters";
import CompanyDescription from "./CompanyDescription";
import CompanyJobs from "./CompanyJobs";
import CompanyCandidates from "./CompanyCandidates";
import CompanyEdit from "./CompanyEdit";

export default function CompanySubPage({subPage}) {

    switch (subPage) {
        case 0:
            return <CompanyDescription/>
        case 1:
            return <CompanyJobs/>
        case 2:
            return <CompanyRecruiters/>
        case 3:
            return <CompanyCandidates/>
        case 4:
            return <CompanyEdit/>
        default:
            <div/>
    }
}