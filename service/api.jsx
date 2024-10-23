import axios from "axios";

const URL = import.meta.env.VITE_REACT_APP_API_URL;

const api = axios.create({
  baseURL: `${URL}/api/v1`,
  withCredentials: true,
});

export default api;
