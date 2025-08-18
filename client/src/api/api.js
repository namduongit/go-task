import axios from "axios";

const api = axios.create({
    baseURL: process.env.VITE_API_URL
});

api.interceptors.request.use((config) => {
    const tokenString = localStorage.getItem("TOKEN");
    if (!tokenString) return config;

    const tokenData = JSON.parse(tokenString) || {};
    const expiry = tokenData.expires_in || null;

    if (!tokenData || !expiry) return config;
    if (new Date() > new Date(expiry)) {
        localStorage.clear();
        window.location.href = "/";

        return Promise.rejectd("Token expired");
    }

    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
});

export default api;
