import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "~/store/reducer";

const store = configureStore({
  reducer: {
    data: rootReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
