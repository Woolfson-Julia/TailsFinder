import { createSelector } from "@reduxjs/toolkit";
import { selectSelectedCity, selectSelectedDistrict, selectSelectedSpecies, selectSelectedStatus } from "../filters/selectors";

export const selectAdvertsState = (state) => state.adverts;
export const selectAdvertsList = (state) => state.adverts.list;
export const selectAdvertsLatest = (state) => state.adverts.latest;
export const selectAdvertSelected = (state) => state.adverts.selected;

export const selectAdvertsPagination = (state) => state.adverts.pagination;

export const selectAdvertsLoading = (state) => state.adverts.loading;
export const selectAdvertsError = (state) => state.adverts.error;

export const selectFilteredAdverts = createSelector(
  [selectAdvertsList, selectSelectedStatus, selectSelectedSpecies, selectSelectedCity, selectSelectedDistrict],
  (list, status, species, city, district) => {
    if (!list) return [];

    return list.filter((ad) => {

      const statusMatch = !status || ad.status === status;
      const speciesMatch = !species || ad.animal?.species === species;
      const cityMatch =
        !city ||
        ad.context?.location?.city?.toLowerCase() === city.toLowerCase();
      const districtMatch =
        !district ||
        ad.context?.location?.district?.toLowerCase() ===
          district.toLowerCase();

      return statusMatch && speciesMatch && cityMatch && districtMatch;
    });
  }
);

export const selectPaginatedAdverts = createSelector(
  [selectFilteredAdverts, selectAdvertsPagination],
  (filtered, pagination) => {
    if (!filtered) return [];

        const { page = 1, perPage = 6 } = pagination;
        const end = page * perPage;


    return filtered.slice(0, end);
  }
);
