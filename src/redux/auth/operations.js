import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axiosConfig";

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "/auth/register",
        credentials
        //credentials, { withCredentials: true, }
      );

      const { user, accessToken } = res.data.data;

      setAuthHeader(`Bearer ${accessToken}`);
      return { user, accessToken };
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return thunkAPI.rejectWithValue("This email is already registered");
      }
      if (error.response?.status === 400) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue(
        "Registration failed. Please try again later."
      );
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "/auth/login",
        credentials
        // credentials, { withCredentials: true }
      );

      const { user, accessToken } = res.data.data;

      setAuthHeader(`Bearer ${accessToken}`);

      return { user, accessToken };
    } catch (error) {
      if (error.response?.status === 401) {
        return thunkAPI.rejectWithValue("Invalid email or password");
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post(
      "/auth/logout",
      null
      // , { withCredentials: true }
    );
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message
    );
  } finally {
    setAuthHeader("");
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      if (!reduxState.auth.accessToken)
        return thunkAPI.rejectWithValue("No access token");

      setAuthHeader(`Bearer ${reduxState.auth.accessToken}`);

      const res = await axios.get(
        "/users/current"
        // , { withCredentials: true }
      );
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return !!reduxState.auth.accessToken;
    },
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.patch("/users/current", payload);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

