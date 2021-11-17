import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/experience";

const getExperiencesPublic = (username) => {
    return axios.get(API_URL+`/public/${username}`);
}

const getExperiences = () => {
    return axios.get(API_URL,{
        headers: authHeader(),
    })
};

const saveExperiences = (listOfExperiences) => {
    return axios.post(API_URL, listOfExperiences
        , {
            headers: authHeader(),
        })
};

export default {
    getExperiences,
    getExperiencesPublic,
    saveExperiences
};