import { createReducer } from "@reduxjs/toolkit";
import { IInitialState } from "../interface";
import { IOrderProduct } from "~/interfaces/apiResponse";
import { ClearCarts, GetCategories, GetListCart } from "../actions";

const initialState: IInitialState = {
  listCarts: [],
  categories: [],
  totalCart: 0,
  totalPrice: 0,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(GetListCart, (state) => {
    const listCarts = JSON.parse(localStorage.getItem("listCart") || "[]");
    const totalCart = listCarts.reduce((total: number, item: IOrderProduct) => {
      return (total += item.count);
    }, 0);
    const totalPrice = listCarts.reduce(
      (total: number, item: IOrderProduct) => {
        return (total += item.count * item.price);
      },
      0
    );

    state.listCarts = listCarts;
    state.totalCart = totalCart;
    state.totalPrice = totalPrice;
  });

  builder.addCase(ClearCarts, (state) => {
    const newListCarts: [] = [];
    localStorage.setItem("listCart", JSON.stringify(newListCarts));
    state.listCarts = newListCarts;
    state.totalCart = 0;
    state.totalPrice = 0;
  });

  builder.addCase(GetCategories, (state, action) => {
    const listCategories = action.payload;
    state.categories = listCategories;
  })
});

export default rootReducer;
