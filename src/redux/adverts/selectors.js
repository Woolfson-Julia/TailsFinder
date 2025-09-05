import { createSelector } from "@reduxjs/toolkit";

export const selectAdvertsState = (state) => state.adverts;

export const selectAdvertsList = (state) => state.adverts.list;
export const selectAdvertsLatest = (state) => state.adverts.latest;
export const selectAdvertSelected = (state) => state.adverts.selected;

export const selectAdvertsPagination = (state) => state.adverts.pagination;

export const selectAdvertsLoading = (state) => state.adverts.loading;
export const selectAdvertsError = (state) => state.adverts.error;

export const selectFilteredAdverts = createSelector(
  [selectAdvertsList, (state, filters) => filters],
  (list, filters) => {
    if (!list) return [];

    return list.filter((ad) => {
      const { status, species, city, district } = filters || {};

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

    const { page = 1, perPage = 20 } = pagination;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return filtered.slice(start, end);
  }
);
