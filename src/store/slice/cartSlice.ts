import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface ICartProduct {
  product_id: {
    title: string;
    thumbnail: string;
  };
  quantity: number;
}

interface ICartInfor {
  _id: string | null;
  cart_userId: string | null;
  cart_count: number;
  cart_total: number;
  cart_products: ICartProduct[];
}

const initialState: ICartInfor = {
  _id: null,
  cart_userId: null,
  cart_count: 0,
  cart_total: 0,
  cart_products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setInforCart: (state, action) => {
      state._id = action.payload._id;
      state.cart_count = action.payload.cart_count;
      state.cart_total = action.payload.cart_total;
      state.cart_userId = action.payload.cart_userId;
      state.cart_products = action.payload.cart_products;
    },
    updateItem: (state, action) => {
      state.cart_count = action.payload.cart_count;
      state.cart_total = action.payload.cart_total;
      state.cart_products = action.payload.cart_products;
    },
  },
});

export const getCart = (state: RootState) => state.cart;

export const { setInforCart, updateItem } = cartSlice.actions;
export default cartSlice.reducer;
