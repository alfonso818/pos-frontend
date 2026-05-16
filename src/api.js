import axios from "axios";

const API = "https://pos-backend-production-ec15.up.railway.app";

export const api = axios.create({
  baseURL: API
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});