import { createListenerMiddleware } from "@reduxjs/toolkit";
import { fetchFilters } from "./operations";
import toast from "react-hot-toast";

const filtersListenerMiddleware = createListenerMiddleware();

filtersListenerMiddleware.startListening({
  actionCreator: fetchFilters.rejected,
  effect: async () => {
    toast.error("Failed to load filters");
  },
});

export default filtersListenerMiddleware;
