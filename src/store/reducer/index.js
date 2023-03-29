import { GET_LIST_CARTS, DELETE_ITEM_IN_CART } from "../types";

const initialState = {
  listCarts: [],
  totalCart: 0,
  totalPrice: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CARTS:
      return {
        ...state,
        listCarts: action.payload.listCarts,
        totalCart: action.payload.totalCart,
        totalPrice: action.payload.totalPrice,
      };

    case DELETE_ITEM_IN_CART:
      return {
        ...state,
        listCarts: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
