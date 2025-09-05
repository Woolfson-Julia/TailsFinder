import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axiosConfig";

export const fetchLatestAdverts = createAsyncThunk(
  "adverts/fetchLatest",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/adverts/start");
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (params, thunkAPI) => {
    try {
      const res = await axios.get("/adverts", { params });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const fetchAdvertById = createAsyncThunk(
  "adverts/fetchById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/adverts/${id}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const createAdvert = createAsyncThunk(
  "adverts/create",
  async (payload, thunkAPI) => {
    try {
      const formData = new FormData();
      Object.keys(payload).forEach((key) => {
        if (key === "photos") {
          payload.photos.forEach((file) => formData.append("photos", file));
        } else if (typeof payload[key] === "object") {
          formData.append(key, JSON.stringify(payload[key]));
        } else {
          formData.append(key, payload[key]);
        }
      });

      const res = await axios.post("/adverts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const updateAdvert = createAsyncThunk(
  "adverts/update",
  async ({ id, data }, thunkAPI) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "photos") {
          data.photos.forEach((file) => formData.append("photos", file));
        } else if (typeof data[key] === "object") {
          formData.append(key, JSON.stringify(data[key]));
        } else {
          formData.append(key, data[key]);
        }
      });

      const res = await axios.patch(`/adverts/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
