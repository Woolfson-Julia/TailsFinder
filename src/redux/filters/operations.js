import { generateThunk } from "../utils/generateThunk.js";
import axios from "../../../axiosConfig.js";

export const fetchFilters = generateThunk("filters/fetchFilters", (filters) => {
  return axios.get("/filters", { params: filters });
});

// POST-запит для реєстрації
export const register = generateThunk("auth/register", (userData) => {
  return axios.post("/auth/register", userData);
});