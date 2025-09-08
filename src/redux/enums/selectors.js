export const selectEnums = (state) => state.enums;

export const selectSpecies = (state) => state.enums?.species || [];
export const selectColors = (state) => state.enums?.colors || [];
export const selectSex = (state) => state.enums?.sex || [];
export const selectSize = (state) => state.enums?.size || [];
export const selectStatus = (state) => state.enums?.status || [];

export const selectLoading = (state) => state.enums.loading;
export const selectError = (state) => state.enums.error;
