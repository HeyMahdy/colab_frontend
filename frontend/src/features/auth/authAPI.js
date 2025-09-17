import axios from "axios";

const API_URL = "http://ec2-13-126-1-128.ap-south-1.compute.amazonaws.com:8000/auth";

// ✅ Create axios instance
const axiosInstance = axios.create({
    baseURL: API_URL,
});

// ✅ Add token to headers if available
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const signupAPI = (data) => axiosInstance.post("/signup", data);
export const loginAPI = (data) => axiosInstance.post("/login", data);
