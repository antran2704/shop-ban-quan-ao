import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice";
import cartReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;