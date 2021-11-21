import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/recruiter";

const deleteRecruiter = (companyName, recruiterToDelete) => {
    return axios.post(API_URL, {
        companyName,
        recruiterToDelete
    }, {
        headers: authHeader()
    });
};

const promoteRecruiter = (companyName, recruiterToPromote) => {
    return axios.post(API_URL + '/promote', {
        companyName,
        recruiterToPromote
    }, {
        headers: authHeader()
    })
};


export default {
    deleteRecruiter,
    promoteRecruiter,
};

