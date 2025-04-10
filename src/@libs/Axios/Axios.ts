import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: API_URL,
  timeout: 10000,
  headers: {
    // Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  params: {
    // api_key: API_KEY,
  },
});

export default axiosInstance;
