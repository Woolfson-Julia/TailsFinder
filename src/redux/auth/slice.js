import toast from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register, updateUser } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload || "Something went wrong";
  toast.error(state.error);
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.accessToken = actions.payload.accessToken;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.accessToken = actions.payload.accessToken;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.accessToken = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.error = null;
        state.loading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, actions) => {
        state.user = actions.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.loading = false;
        state.error =
          action.payload || "Something went wrong with refreshing user";
        state.isLoggedIn = false;
        state.accessToken = null;
        toast.error(
          "Oops! An error occurred. Please try refreshing the page or log in again."
        );
      })
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        toast.success("Profile updated successfully!");
      })
      .addCase(updateUser.rejected, handleRejected),
});

export default authSlice.reducer;
