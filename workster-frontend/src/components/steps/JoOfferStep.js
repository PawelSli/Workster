import JobOfferBasicInformation from "./JobOfferBasicInformation";
import React from "react";
import JobOfferDescription from "./JobOfferDescription";

export default function ({step,goForwardFunction,goBackFunction}) {

    switch (step) {
        case 0:
            return <JobOfferBasicInformation goForwardFunction={goForwardFunction}/>
        case 1:
            return <JobOfferDescription goBackFunction={goBackFunction}/>
    }

}