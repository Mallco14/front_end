import axios from "axios";

const baseURL = "http://localhost:9000/api/users/";

const instance = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type":"application/json",
    },
});
export default instance;