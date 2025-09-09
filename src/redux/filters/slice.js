import { createSlice } from "@reduxjs/toolkit";
import { fetchFilters } from "./operations";

const slice = createSlice({
  name: "filters",
  initialState: {
    selectedCity: "",
    selectedDistrict: "",
    selectedSpecies: "",
    selectedStatus: "",
    cities: [],
    districts: [],
    species: [],
    statuses: [],
    loading: false,
    error: null,
  },
  reducers: {
    changeSelectedCityFilter: (state, action) => {
      state.selectedCity = action.payload;
    },
    changeSelectedDistrictFilter: (state, action) => {
      state.selectedDistrict = action.payload;
    },
    changeSelectedSpeciesFilter: (state, action) => {
      state.selectedSpecies = action.payload;
    },
    changeSelectedStatusFilter: (state, action) => {
      state.selectedStatus = action.payload;
    },
    resetFilters: (state, action) => {
      const key = action.payload;
      state[key] = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload.data.cities;
        state.districts = action.payload.data.districts;
        state.species = action.payload.data.species;
        state.statuses = action.payload.data.statuses;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default slice.reducer;

export const {
  changeSelectedCityFilter,
  changeSelectedDistrictFilter,
  changeSelectedSpeciesFilter,
  changeSelectedStatusFilter,
  resetFilters,
} = slice.actions;
