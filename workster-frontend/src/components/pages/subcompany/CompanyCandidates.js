import CompanyUserCard from "../../reusable/CompanyUserCard";
import React from "react";

export default function CompanyCandidates({candidates,companyName}) {

    return (
        <div className="row p-2">
            {candidates.map(item => (
                <CompanyUserCard username={item.username} createdAt={item.createdAt}
                                 image={item.image} title={item.title} companyName={companyName}/>
            ))}
        </div>
    )

}