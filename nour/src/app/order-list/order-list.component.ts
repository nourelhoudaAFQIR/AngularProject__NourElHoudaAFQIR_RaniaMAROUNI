import {Component, OnInit} from '@angular/core';
import {OrderValidated} from "../model/orderValidated";
import {OrderService} from "../services/order/order.service";
import {Router} from "@angular/router";
import {ConnexionService} from "../services/connexion/connexion.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit{
  commands: OrderValidated[] = [];

  constructor(private commandService: OrderService,
              private router: Router,
              private authService: ConnexionService) {
  }

  ngOnInit(): void {
    if (!this.authService.isUserConnected()){
      window.alert("Sorry! You're not authenticated! Do the authentication first !");
      this.router.navigate(["/login"]);
      return;
    }
    this.getValidatedCommands();
  }

  getValidatedCommands(){
    this.commands = this.commandService.getValidatedCommands();
  }
}
