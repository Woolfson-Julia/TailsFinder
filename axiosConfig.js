import axios from "axios";

const instance = axios.create({
  baseURL: "https://byte-bite-v2-0.onrender.com/api",
});

export default instance;
