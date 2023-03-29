import { GET_LIST_CARTS, DELETE_ITEM_IN_CART } from "../types";

export const handleGetListCart = (dispatch) => {
  const listCarts = JSON.parse(localStorage.getItem("listCart"));
  const totalCart = listCarts.reduce((total, item) => {
    return (total += item.count);
  }, 0);
  const totalPrice = listCarts.reduce((total, item) => {
    return (total += item.count * item.price);
  }, 0);

  dispatch({
    type: GET_LIST_CARTS,
    payload: {
      listCarts,
      totalCart,
      totalPrice,
    },
  });
};

export const handleDeleteProductInCart = (listCarts, index) => {
  if (listCarts.length > 1) {
    listCarts.splice(index, listCarts.length - 1);
  } else {
    listCarts = [];
  }
  localStorage.setItem("listCart", JSON.stringify(listCarts));
};
