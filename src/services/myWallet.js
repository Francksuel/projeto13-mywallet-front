import axios from "axios";
const URL = "http://localhost:5000/";

function postCadaster(body) {
    const promise = axios.post(`${URL}sign-up`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${URL}sign-in`, body);
    return promise;
}


export {postLogin, postCadaster};