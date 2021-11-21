import React, {useEffect, useState} from "react";
import FavouriteJobOffers from "../submyjoboffers/FavouriteJobOffers";
import CompanyRecruiters from "./CompanyRecruiters";
import CompanyDescription from "./CompanyDescription";
import CompanyJobs from "./CompanyJobs";
import CompanyCandidates from "./CompanyCandidates";
import CompanyEdit from "./CompanyEdit";
import CompanyService from "../../../services/company.service";

export default function CompanySubPage({admin,subPage,text,recruiters,companyName}) {

    switch (subPage) {
        case 0:
            return <CompanyDescription text={text}/>
        case 1:
            return <CompanyJobs/>
        case 2:
            return <CompanyRecruiters recruiters={recruiters} admin={admin} companyName={companyName} />
        case 3:
            return <CompanyCandidates/>
        case 4:
            return <CompanyEdit/>
        default:
            <div/>
    }
}