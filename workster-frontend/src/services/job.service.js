import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/job-offer";

const postJobOffer = (jobOfferInfo, address, companyName) => {
    let formData = new FormData();
    formData.set("title", jobOfferInfo.title);
    formData.set("location", address);
    formData.set("companyName", companyName.value);
    formData.set("lowerGap", jobOfferInfo.lowerGap);
    formData.set("higherGap", jobOfferInfo.higherGap);
    formData.set("remote", jobOfferInfo.remote);
    formData.set("description", jobOfferInfo.description.value);

    return axios.post(API_URL, formData, {
        headers: authHeader()
    });
};

const getAllJobOffers = () => {
    return axios.get(API_URL + '/public', {
        headers: authHeader()
    });
};

const addJobToFavourites = (jobName) => {
    return axios.post(API_URL + `/favourite/${jobName}`, {}, {
        headers: authHeader()
    });
};

const removeFromFavourites = (jobName) => {
    return axios.post(API_URL + `/favourite/remove/${jobName}`, {}, {
        headers: authHeader()
    });
};

const deleteJobOffer = (jobName) => {
    return axios.post(API_URL + `/remove/${jobName}`, {}, {
        headers: authHeader()
    });
};


export default {
    postJobOffer,
    getAllJobOffers,
    addJobToFavourites,
    removeFromFavourites,
    deleteJobOffer,
}