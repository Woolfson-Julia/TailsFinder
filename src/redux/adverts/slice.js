import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  fetchLatestAdverts,
  fetchAdverts,
  fetchAdvertById,
  createAdvert,
  updateAdvert,
} from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload || "Something went wrong";
  toast.error(state.error);
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    latest: [],
    list: [],
    pagination: { total: 0, page: 1, perPage: 6, totalPages: 1 },
    selected: null,
    loading: false,
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchLatestAdverts.pending, handlePending)
      .addCase(fetchLatestAdverts.fulfilled, (state, action) => {
        state.latest = action.payload;
        state.loading = false;
      })
      .addCase(fetchLatestAdverts.rejected, handleRejected)
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        const page = Number(action.payload.pagination.page);
        const newAds = action.payload.data;
        if (page === 1) {
          state.list = newAds;
        } else {
          state.list = [...state.list, ...newAds];
        }
        state.pagination = action.payload.pagination;
        state.loading = false;
      })
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdvertById.pending, handlePending)
      .addCase(fetchAdvertById.fulfilled, (state, action) => {
        state.selected = action.payload;
        state.loading = false;
      })
      .addCase(fetchAdvertById.rejected, handleRejected)
      .addCase(createAdvert.pending, handlePending)
      .addCase(createAdvert.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
        state.latest = [action.payload, ...state.latest].slice(0, 6);
        state.loading = false;
        toast.success("Advert successfully created!");
      })
      .addCase(createAdvert.rejected, handleRejected)
      .addCase(updateAdvert.pending, handlePending)
      .addCase(updateAdvert.fulfilled, (state, action) => {
        const indexList = state.list.findIndex(
          (ad) => ad._id === action.payload._id
        );
        if (indexList > -1) state.list[indexList] = action.payload;

        const indexLatest = state.latest.findIndex(
          (ad) => ad._id === action.payload._id
        );
        if (indexLatest > -1) state.latest[indexLatest] = action.payload;

        if (state.selected?._id === action.payload._id)
          state.selected = action.payload;

        state.loading = false;
        toast.success("Advert successfully updated!");
      })
      .addCase(updateAdvert.rejected, handleRejected),
});

export default advertsSlice.reducer;
export const { setPage } = advertsSlice.actions;
