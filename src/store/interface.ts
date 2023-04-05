import { IInforProduct } from "~/interfaces";

export interface IInitialState {
  listCarts: IInforProduct[];
  totalCart: number;
  totalPrice: number;
}