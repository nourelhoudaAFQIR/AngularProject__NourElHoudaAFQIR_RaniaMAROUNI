import { Injectable } from '@angular/core';
import {Product} from "../../model/product";
import {ProductCommand} from "../../model/productCommand";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productCommands: ProductCommand[]=[];

  constructor() { }

  getTotalPrice(): number{
    let totalPrice: number = 0;
    for (const command of this.productCommands) {
      totalPrice += command.product.price * command.quantity;
    }
    return totalPrice;
  }

  getProductCommands(): ProductCommand[] {
    this.getCartFromLocalStotage();
    return this.productCommands;
  }

  nettoyeCart(){
    this.productCommands = [];
    this.saveCartInLocalStorage();
  }
  addToCart(product:Product){
    if(this.isProductInCart(product)){
      return
    }
    let newCommand: ProductCommand={
      product:product,
      quantity:1
    }
    this.productCommands.push(newCommand);
    this.saveCartInLocalStorage()
  }


  removeFromCart(product:Product){
    let newCart: ProductCommand[] = [];
    for (const productCommand of this.productCommands){
      if (productCommand.product?.id != product.id){
        newCart.push(productCommand);
      }
    }
    this.productCommands = newCart;
    this.saveCartInLocalStorage();

  }
  isProductInCart(product: Product):boolean{
    for(let productCommand of this.productCommands){
       if(productCommand.product.id == product.id){
         return true;
       }
    }
    return false;
  }

  saveChanges(newCart: ProductCommand[]){
    this.productCommands = newCart;
    this.saveCartInLocalStorage();
  }

  saveCartInLocalStorage(){
    localStorage.setItem('CART_KEY', JSON.stringify(this.productCommands));
  }

  getCartFromLocalStotage(){
    let savedCartJson = localStorage.getItem('CART_KEY');
    if(savedCartJson){
      this.productCommands = JSON.parse(savedCartJson);
    }
  }

}
