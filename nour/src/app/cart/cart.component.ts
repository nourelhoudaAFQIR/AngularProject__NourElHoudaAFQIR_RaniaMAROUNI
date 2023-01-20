import {Component, OnInit} from '@angular/core';
import {ProductCommand} from "../model/productCommand";
import {CartService} from "../services/cart/cart.service";
import {Product} from "../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  productCommands: ProductCommand[] = [];


  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCommandsFromCart();
  }

  getCommandsFromCart(){
    this.productCommands = this.cartService.getProductCommands();

  }

  removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
    this.getCommandsFromCart();
  }

  saveModificationsToCart() {
    this.cartService.saveChanges(this.productCommands);
  }

  validateCommand() {
    if (this.productCommands.length>0){
      this.router.navigate(["/confirm"]);
    }

  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }
}
