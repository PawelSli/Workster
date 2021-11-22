import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/candidate";

const checkIfApplied = (company) => {
    return axios.get(API_URL + `/${company}`, {
        headers: authHeader()
    });
};

const applyForRecruiter = (company) => {
    return axios.post(API_URL + `/save/${company}`, {}, {
        headers: authHeader()
    });
};

const acceptSomeoneAsRecruiter = (userName, company) => {
    return axios.post(API_URL + `/apply`, {
        userName: userName,
        companyName: company
    }, {
        headers: authHeader()
    });
};

const denySomeoneAsRecruiter = (userName, company) => {
    return axios.post(API_URL + `/deny`, {
        userName: userName,
        companyName: company
    }, {
        headers: authHeader()
    });
};


export default {
    checkIfApplied,
    acceptSomeoneAsRecruiter,
    denySomeoneAsRecruiter,
    applyForRecruiter
}
