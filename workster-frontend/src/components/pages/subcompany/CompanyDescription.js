import React from "react";

export default function CompanyDescription({text}) {

    return (
        <div className="body p-2">
            <small dangerouslySetInnerHTML={{__html:text}}>
            </small>
        </div>
    )
}