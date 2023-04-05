import { createReducer } from "@reduxjs/toolkit";
import { IInitialState } from "../interface";
import { IInforProduct } from "~/interfaces";
import { ClearCarts, GetListCart } from "../actions";

const initialState: IInitialState = {
  listCarts: [],
  totalCart: 0,
  totalPrice: 0,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(GetListCart, (state) => {
    const listCarts = JSON.parse(localStorage.getItem("listCart") || "[]");
    const totalCart = listCarts.reduce((total: number, item: IInforProduct) => {
      return (total += item.count);
    }, 0);
    const totalPrice = listCarts.reduce(
      (total: number, item: IInforProduct) => {
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
  });
});

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_LIST_CARTS:
//       return {
//         ...state,
//         listCarts: action.payload.listCarts,
//         totalCart: action.payload.totalCart,
//         totalPrice: action.payload.totalPrice,
//       };

//     default:
//       return state;
//   }
// };

export default rootReducer;