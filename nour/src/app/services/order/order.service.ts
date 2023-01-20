import { Injectable } from '@angular/core';
import {OrderValidated} from "../../model/orderValidated";
import {CartService} from "../cart/cart.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  COMMAND_KEY: string = "COMMAND_KEY";

  commands: OrderValidated[] = [];

  constructor(private cartService: CartService) { }

  validateCommand(){
    this.loadCommandsFromLocalStorage();
    let newCommandId: number = this.commands.length+1;
    let newValidatedCommand: OrderValidated = {
      id: newCommandId,
      productsOrder: this.cartService.getProductCommands(),
      date: new Date(),
      totalPrice: this.cartService.getTotalPrice()
    };
    this.commands.push(newValidatedCommand);
    this.cartService.nettoyeCart();
    this.saveCommandsInLocalStorage();
  }

  getValidatedCommands(): OrderValidated[] {
    this.loadCommandsFromLocalStorage();
    return this.commands;
  }

  getValidatedCommandById(id: number): OrderValidated | undefined {
    this.loadCommandsFromLocalStorage();
    return this.commands.find(command => command.id == id);
  }

  saveCommandsInLocalStorage(){
    localStorage.setItem(this.COMMAND_KEY, JSON.stringify(this.commands));
  }

  loadCommandsFromLocalStorage(){
    let savedCommands = localStorage.getItem(this.COMMAND_KEY);
    if (savedCommands){
      this.commands = JSON.parse(savedCommands);
    }
  }


}
