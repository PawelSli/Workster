import "../../../assets/styles/company-recruiters.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTimesCircle,
    faDownload,
    faMapMarkerAlt,
    faMoneyBill,
    faHome,
    faSquare, faSearchPlus, faCrown, faTrash, faSearch
} from '@fortawesome/free-solid-svg-icons'
import CompanyRecruiter from "../../reusable/CompanyRecruiter";
import React from "react";

export default function CompanyRecruiters({recruiters, admin, companyName}) {

    return (
        <div className="row p-2">
            {recruiters.map(item => (
                <CompanyRecruiter title={item.title} image={item.image} username={item.username}
                                  createdAt={item.createdAt} status={item.recruiterRole} admin={admin}
                                  companyName={companyName}/>
            ))}
        </div>
    )

}