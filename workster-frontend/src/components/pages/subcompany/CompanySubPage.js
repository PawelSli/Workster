import CompanyDescription from "./CompanyDescription";
import React from "react";
import Pricing from "../Pricing";
import CompanyJobs from "./CompanyJobs";

export default function CompanySubPage({subPage}) {

    switch (subPage) {
        case 0:
            return <CompanyDescription/>
        case 1:
            return <CompanyJobs/>
        case 2:
            return <CompanyDescription/>
        case 3:
            return <CompanyDescription/>
        case 4:
            return <Pricing/>
        default:
            <div/>
    }
}