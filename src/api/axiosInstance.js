import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "http://192.168.0.22:8000/api/v1"
});

export default axiosInstance;