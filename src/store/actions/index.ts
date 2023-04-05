import { createAction } from "@reduxjs/toolkit";
import { IInforProduct } from "~/interfaces";

export const GetListCart = createAction<void>("GetListCart");
export const ClearCarts = createAction<void>("ClearCarts");

export const handleDeleteProductInCart = (
  listCarts: IInforProduct[],
  index: number
) => {
  let currentListCarts: IInforProduct[] = [...listCarts];
  console.log(listCarts);
  console.log(index);
  if (currentListCarts.length > 1) {
    currentListCarts.splice(index, currentListCarts.length - 1);
  } else {
    currentListCarts = [];
  }
  localStorage.setItem("listCart", JSON.stringify(currentListCarts));
};
