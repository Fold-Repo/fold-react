import { API_BASE_URL } from "@/constants";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const baseURL = API_BASE_URL

const axiosConfig = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const axiosNoAuth = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosConfig.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {

        // REPLACE WITH ACTUAL TOKEN RETRIEVAL LOGIC
        // For example, you might retrieve it from localStorage or a global state
        const token = undefined;

        if (!token) {
            console.warn("No token available. Skipping request.");
            return Promise.reject(new AxiosError("No token available", "AUTH_ERROR"));
        }

        config.headers.Authorization = `Bearer ${token}`;

        return config;

    },
    (error: AxiosError) => Promise.reject(error)
);

axiosConfig.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        if (error.response?.status === 401) {
            const callbackUrl = new URLSearchParams(window.location.search).get("callbackUrl") || "/";
            window.location.href = `/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`;
        }

        return Promise.reject(error);
    }
);

export default axiosConfig;
