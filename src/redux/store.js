import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import filtersReducer from "./filters/slice";
import enumsReducer from "./enums/slice";
import authReducer from "./auth/slice";
import advertsReducer from "./adverts/slice";
import modalReducer from "./modal/slice.js";
import filtersListenerMiddleware from "./filters/middlewares";
import advertsListenerMiddleware from "./adverts/middlewares.js";

const persistedAuthReducer = persistReducer(
  {
    key: "user-token",
    storage,
    whitelist: ["accessToken"],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    enums: enumsReducer,
    auth: persistedAuthReducer,
    modal: modalReducer,
    adverts: advertsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(filtersListenerMiddleware.middleware)
      .concat(advertsListenerMiddleware.middleware),
});

export default store;

export const persistor = persistStore(store);
