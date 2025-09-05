import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axiosConfig";

export const fetchEnumOptions = createAsyncThunk(
  "enums/fetchEnumOptions",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/enums");
      return res.data; // { species, colors, sex, size, status }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
