import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/education";

const getEducations = () => {
    return axios.get(API_URL, {
        headers: authHeader(),
    })
};

const getEducationPublic = (username) => {
    return axios.get(API_URL + `/public/${username}`);
}

const saveEducaions = (listOfEducations) => {
    return axios.post(API_URL, listOfEducations
        , {
            headers: authHeader(),
        })
};

export default {
    getEducations,
    getEducationPublic,
    saveEducaions
};
