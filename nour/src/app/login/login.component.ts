import { Component } from '@angular/core';
import {ConnexionService} from "../services/connexion/connexion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: ConnexionService,private router: Router) {
  }

  ngOnInit() {
  }

  login(email: string, password: string) {
    // @ts-ignore
    if(this.authService.login(email, password)){
      this.router.navigate(["/catalog"]);
    }


  }

  signUp() {
    this.router.navigate(["/signUp"]);
    console.log("fff");
  }

}
