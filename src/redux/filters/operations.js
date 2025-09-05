import { generateThunk } from "../utils/generateThunk";
import axios from "../../axiosConfig";

export const fetchFilters = generateThunk("filters/fetchFilters", () => {
  return axios.get("/filters");
});
