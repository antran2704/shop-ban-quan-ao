import { ICategory, IOrderProduct } from "~/interfaces/apiResponse";

export interface IInitialState {
  listCarts: IOrderProduct[];
  totalCart: number;
  totalPrice: number;
  categories: ICategory[];
}