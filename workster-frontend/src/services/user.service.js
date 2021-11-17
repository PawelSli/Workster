import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/profile/";

const uploadPhoto = (file) => {
    let formData = new FormData();
    formData.append("file", file);
    return axios.post(API_URL + `upload-photo`, formData, {
        headers: authHeader(),
        "Content-Type": "multipart/form-data"
    })
};

const getMainProfileInformation = (username) => {
    return axios.get(API_URL + `main/${username}`);
};

const getMainProfileInformationForEdit = () => {
    return axios.get(API_URL+'edit-main-information',{
        headers: authHeader()
    })
};

const editMainProfileInformation = (name, email, address, birth, description, facebook, github, image, instagram, phone, title, twitter, website) => {
    return axios.post(API_URL + 'edit-main-information', {
        name,
        email,
        address,
        birth,
        description,
        facebook,
        github,
        image,
        instagram,
        phone,
        title,
        twitter,
        website
    }, {
        headers: authHeader(),
    });
};

export default {
    getMainProfileInformation,
    editMainProfileInformation,
    uploadPhoto,
    getMainProfileInformationForEdit
};