import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password, birth) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
        birth
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const isLogged = () => {
    return (localStorage.getItem("user") && true)
};

const isRecruiter = (jobOfferId) => {
    return (isLogged() && JSON.parse(localStorage.getItem("user")).userJobOffersIds.includes(parseInt(jobOfferId)) && true)
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
    isLogged,
    isRecruiter
};