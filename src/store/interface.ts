import { IInforProduct } from "~/interfaces";
import { ICategory } from "~/interfaces/apiResponse";

export interface IInitialState {
  listCarts: IInforProduct[];
  totalCart: number;
  totalPrice: number;
  categories: ICategory[];
}