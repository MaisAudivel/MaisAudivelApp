import axios from "axios";

const axiosDefaultClient = axios.create({
    baseURL: "http://localhost:4000"
});

export default axiosDefaultClient;