import { createSelector } from "@reduxjs/toolkit";

export const selectSelectedCity = (state) => state.filters.selectedCity;
export const selectSelectedDistrict = (state) => state.filters.selectedDistrict;
export const selectSelectedStatus = (state) => state.filters.selectedStatus;
export const selectSelectedSpecies = (state) => state.filters.selectedSpecies;
export const selectCities = (state) => state.filters.cities;
export const selectDistriects = (state) => state.filters.districts;
export const selectStatuses = (state) => state.filters.statuses;
export const selectSpecies = (state) => state.filters.species;
export const selectLoading = (state) => state.filters.loading;
export const selectError = (state) => state.filters.error;
export const selectFilters = createSelector(
  (state) => state.filters.selectedStatus,
  (state) => state.filters.selectSpecie,
  (state) => state.filters.selectedCity,
    (state) => state.filters.selectedDistrict,
  (status, specie, city, district) => ({
  status, specie, city, district
  })
);