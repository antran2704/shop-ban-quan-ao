import { createAction } from "@reduxjs/toolkit";
import { IInforProduct } from "~/interfaces";
import { ICategory } from "~/interfaces/apiResponse";

export const GetListCart = createAction<void>("GetListCart");
export const ClearCarts = createAction<void>("ClearCarts");

// get Categories
export const GetCategories = createAction<ICategory[]>("GetCategories")

export const handleDeleteProductInCart = (
  listCarts: IInforProduct[],
  index: number
) => {
  let currentListCarts: IInforProduct[] = [...listCarts];
  
  if (currentListCarts.length > 1) {
    currentListCarts.splice(index, currentListCarts.length - 1);
  } else {
    currentListCarts = [];
  }
  localStorage.setItem("listCart", JSON.stringify(currentListCarts));
};
