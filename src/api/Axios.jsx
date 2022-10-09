import axios from "axios";
const baseURL = "http://localhost:5000";

export default axios.create({
    baseURL
});

export const axiosPrivate = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        // 'Authorization': 'Bearer '+auth.token
    },
    withCredentials: true
})