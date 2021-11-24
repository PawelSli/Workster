import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/company";

const getSpecificCompany = (title) => {
    return axios.get(API_URL + `/public/${title}`, {
        headers: authHeader()
    });
};

const getAllCompaniesNames = () => {
    return axios.get(API_URL, {
        headers: authHeader()
    });
};


const postCompany = (title, logo, description) => {
    let formData = new FormData();
    formData.append("logo", logo);
    formData.set("title", title);
    formData.set("description", description);
    return axios.post(API_URL, formData, {
        headers: authHeader()
    });
};

const editCompany = (title,logo,description,previousCompanyName) => {
    let formData = new FormData();
    formData.append("logo", logo);
    formData.set("title", title);
    formData.set("description", description);
    formData.set("previousCompanyName", previousCompanyName);
    return axios.post(API_URL+'/edit', formData, {
        headers: authHeader()
    });
};


export default {
    postCompany,
    getSpecificCompany,
    editCompany,
    getAllCompaniesNames
}
