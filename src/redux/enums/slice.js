import { createSlice } from "@reduxjs/toolkit";
import { fetchEnumOptions } from "./operations";
import toast from "react-hot-toast";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload || "Something went wrong";
  toast.error(state.error);
};

const enumsSlice = createSlice({
  name: "enums",
  initialState: {
    species: [],
    colors: [],
    sex: [],
    size: [],
    status: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchEnumOptions.pending, handlePending)
      .addCase(fetchEnumOptions.fulfilled, (state, action) => {
        state.species = action.payload.species;
        state.colors = action.payload.colors;
        state.sex = action.payload.sex;
        state.size = action.payload.size;
        state.status = action.payload.status;
        state.loading = false;
      })
      .addCase(fetchEnumOptions.rejected, handleRejected),
});

export default enumsSlice.reducer;
