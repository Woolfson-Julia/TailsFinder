import { createSelector } from "@reduxjs/toolkit";

export const selectAuth = (state) => state.auth;

export const selectUserId = (state) => state.auth.user?._id;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;

export const selectUser = createSelector(selectAuth, (auth) => auth.user);

export const selectAccessToken = createSelector(
  selectAuth,
  (auth) => auth.accessToken
);

export const selectUserInfo = createSelector(
  selectUser,
  selectIsLoggedIn,
  (user, isLoggedIn) => ({
    user,
    isLoggedIn,
  })
);
