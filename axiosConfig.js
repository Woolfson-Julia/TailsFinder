import axios from "axios";

const instance = axios.create({
  baseURL: "https://tails-finderbd.onrender.com/api",
});

export default instance;
