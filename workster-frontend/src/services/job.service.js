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

const getAllFavouriteJobOffers = () => {
    return axios.get(API_URL+'/favourite/display',{
        headers: authHeader()
    });
};

const addJobToFavourites = (jobOfferId) => {
    return axios.post(API_URL + `/favourite/${jobOfferId}`, {}, {
        headers: authHeader()
    });
};

const removeFromFavourites = (jobOfferId) => {
    return axios.post(API_URL + `/favourite/remove/${jobOfferId}`, {}, {
        headers: authHeader()
    });
};

const deleteJobOffer = (jobOfferId) => {
    return axios.post(API_URL + `/remove/${jobOfferId}`, {}, {
        headers: authHeader()
    });
};

const getSpecificJobOffer = (jobOfferId) => {
    return axios.get(API_URL + `/public/${jobOfferId}`, {
        headers: authHeader()
    });
};


export default {
    postJobOffer,
    getAllJobOffers,
    getAllFavouriteJobOffers,
    addJobToFavourites,
    removeFromFavourites,
    deleteJobOffer,
    getSpecificJobOffer,
}