import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/document";

const downloadFile = (document) => {
    return fetch(API_URL + `/download/${document}`, {
        method: 'GET',
        headers: authHeader(),
        mode: 'cors'
    });
};

const deleteFile = (document) => {
    return axios.post(API_URL + `/delete/${document}`, null, {
        headers: authHeader()
    });
};

const uploadDocument = (document) => {
    let formData = new FormData();
    formData.append("document", document);
    return axios.post(API_URL, formData, {
        headers: authHeader()
    });
};

const getAllUserDocuments = () => {
    return axios.get(API_URL, {
        headers: authHeader()
    });
};

export default {
    uploadDocument,
    deleteFile,
    getAllUserDocuments,
    downloadFile,
}
