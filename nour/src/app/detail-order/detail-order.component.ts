import {Component, OnInit} from '@angular/core';
import {OrderValidated} from "../model/orderValidated";
import {OrderService} from "../services/order/order.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConnexionService} from "../services/connexion/connexion.service";

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent implements OnInit{
  command?: OrderValidated;

  constructor(private commandService: OrderService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: ConnexionService) {
  }

  ngOnInit(): void {
    if (!this.authService.isUserConnected()){
      window.alert("Sorry, you'are not authenticated ! You need to authenticate first !");
      this.router.navigate(["/login"]);
      return;
    }
    this.getCommandById();
  }

  getCommandById(){
    const id:number= this.route.snapshot.params['id'];
    this.command = this.commandService.getValidatedCommandById(id);
  }

}
