import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/job-request";


const postJobRequest = (message, files, newFile, jobOfferId) => {
    let formData = new FormData();
    formData.append("newFile", newFile);
    let filesValues = files.map((item) => {
        return item.value
    });
    formData.set("message", message);
    formData.set("files", filesValues);

    return axios.post(API_URL + `/${jobOfferId}`, formData, {
        headers: authHeader()
    });
};

const getJobRequestForJobOffer = (jobOfferId) => {
    return axios.get(API_URL + `/${jobOfferId}`, {
        headers: authHeader()
    });
};

const searchJobRequestsForJobOffer = (jobOfferId, userNames, keyWords) => {
    let userNamesPayLoad = userNames.map(item => item.value);
    let keyWordsPayLoad = keyWords.map(item => item.value);
    return axios.post(API_URL + `/search/${jobOfferId}`, {
        userNames: userNamesPayLoad,
        keyWords: keyWordsPayLoad
    }, {
        headers: authHeader()
    });
};

const getApplicantFileFromJobRequest = (jobOfferId, applicantName, fileName) => {
    return fetch(API_URL + `/${jobOfferId}/download/${applicantName}/file/${fileName}`, {
        method: 'GET',
        headers: authHeader(),
        mode: 'cors'
    });
};

export default {
    postJobRequest,
    getJobRequestForJobOffer,
    searchJobRequestsForJobOffer,
    getApplicantFileFromJobRequest
}
