import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasksSlice";
import baseApi from "./features/api/baseApi";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    tasks: tasksSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});

export default store;
