import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "~/store/reducer";

const store = configureStore({
  reducer: {
    data: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
