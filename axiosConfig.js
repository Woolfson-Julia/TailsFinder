import axios from "axios";

const instance = axios.create({
  // baseURL: "https://tails-finderbd.onrender.com/api",
  baseURL: "https://tails-finderbd-production.up.railway.app/api",
  timeout: 0,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    if (!config._retryCount) config._retryCount = 0;

    if (config._retryCount < 2 && error.code === "ECONNABORTED") {
      config._retryCount++;
      return instance(config);
    }

    return Promise.reject(error);
  }
);

export default instance;
