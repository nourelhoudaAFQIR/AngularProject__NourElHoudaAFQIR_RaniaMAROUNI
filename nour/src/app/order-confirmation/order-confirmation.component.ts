import {Component, OnInit} from '@angular/core';
import {ProductCommand} from "../model/productCommand";
import {CartService} from "../services/cart/cart.service";
import {Router} from "@angular/router";
import {ConnexionService} from "../services/connexion/connexion.service";
import {OrderService} from "../services/order/order.service";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  panier:ProductCommand[] = [];

  constructor(private panierService: CartService,
              private router: Router,
              private commandService: OrderService,
              private authService: ConnexionService) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(){
    this.panier=this.panierService.getProductCommands();
  }
  getTotalPrice(): number{
    return this.panierService.getTotalPrice();
  }


  validateCommand() {
    if (!this.authService.isUserConnected()){
      window.alert("Vous n'êtes pas authentifié");
      this.router.navigate(["/login"]);
      return;
    }
    this.commandService.validateCommand();
    this.router.navigate(["/commands"]);
  }

}
