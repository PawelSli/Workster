import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/job-offer";

const postJobOffer = (jobOfferInfo, address, companyName) => {
    console.log(companyName.value)
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


export default {
    postJobOffer,
}