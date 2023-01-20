import {ProductCommand} from "./productCommand";

export interface OrderValidated {
  id: number;
  date:Date;
  productsOrder: ProductCommand[];
  totalPrice: number;




}
