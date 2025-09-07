import axios from "axios";

const instance = axios.create({
  // baseURL: "https://tails-finderbd.onrender.com/api",
  baseURL: "https://tails-finderbd-production.up.railway.app/api",
});

export default instance;
