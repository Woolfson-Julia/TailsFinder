import { generateThunk } from "../utils/generateThunk.js";
import axios from "../../../axiosConfig.js";

export const fetchFilters = generateThunk("filters/fetchFilters", (filters) => {
  return axios.get("/filters", { params: filters });
});

