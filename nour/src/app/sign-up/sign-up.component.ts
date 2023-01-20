import { Component } from '@angular/core';
import {ConnexionService} from "../services/connexion/connexion.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor( private signUpService:ConnexionService,private router :Router) {
  }
  nom: any;



  signUp(email: string, password: string) {
    this.signUpService.signUp(email,password);
  }

  login(email: string, password: string) {
    this.signUpService.signUp(email,password);
    this.router.navigate(["/login"]);
  }
}
