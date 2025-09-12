// advertsListenerMiddleware.js
import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  fetchLatestAdverts,
  fetchAdverts,
  fetchAdvertById,
  createAdvert,
  updateAdvert,
} from "./operations";
import toast from "react-hot-toast";

const advertsListenerMiddleware = createListenerMiddleware();

advertsListenerMiddleware.startListening({
  actionCreator: fetchAdverts.rejected,
  effect: async () => {
    toast.error("Failed to load adverts");
  },
});

advertsListenerMiddleware.startListening({
  actionCreator: fetchLatestAdverts.rejected,
  effect: async () => {
    toast.error("Failed to load latest adverts");
  },
});

advertsListenerMiddleware.startListening({
  actionCreator: fetchAdvertById.rejected,
  effect: async () => {
    toast.error("Failed to load the advert");
  },
});

advertsListenerMiddleware.startListening({
  actionCreator: createAdvert.fulfilled,
  effect: async () => {
    toast.success("Оголошення успішно створенно");
  },
});

advertsListenerMiddleware.startListening({
  actionCreator: createAdvert.rejected,
  effect: async () => {
    toast.error("Failed to create the advert");
  },
});

advertsListenerMiddleware.startListening({
  actionCreator: updateAdvert.fulfilled,
  effect: async () => {
    toast.success("Advert successfully updated");
  },
});

advertsListenerMiddleware.startListening({
  actionCreator: updateAdvert.rejected,
  effect: async () => {
    toast.error("Failed to update the advert");
  },
});

export default advertsListenerMiddleware;
