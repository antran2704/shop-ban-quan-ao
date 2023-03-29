import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "~/store/reducer";

const middleware = [thunk];

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
