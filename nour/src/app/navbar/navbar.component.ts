import { Component } from '@angular/core';
import {CartService} from "../services/cart/cart.service";
import {ConnexionService} from "../services/connexion/connexion.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(private cartService: CartService,
              private authService: ConnexionService) {
  }

  isUserConnected() {
    return this.authService.isUserConnected();

  }

  getUserEmail() {
    return this.authService.getUserEmail();
  }

  logout() {
    this.authService.logout();
  }


}
