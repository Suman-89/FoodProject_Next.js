import axios from "axios";
import { Cookies } from "react-cookie";

export const baseURL = "https://tureappapiforreact.onrender.com/api";
// export const baseURL = "https://wtsacademy.dedicateddevelopers.us/api";

export const AxiosInstance = axios.create({
  baseURL,
});

AxiosInstance.interceptors.request.use(
  async function (config) {
    const cookie = new Cookies();

    const token = cookie.get("token");

    if (token !== null || token !== undefined) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default AxiosInstance;
