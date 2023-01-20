import { Injectable } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {


  authentication_key = "afqir_neh"
  userMail_Defaut = "nourelhoudaafqir@gmail.com"
  passworDefaut = "nour2021"

  isUserAuthenticated: boolean = false;

  registration:any

  signupFormData = {
    password: '',
    email: ''
  };
  private registrationData: any;
  private inscription: any[]=[];

  constructor(private location: Location,private router:Router) {
    this.loadUserAuthStatusFromLocalStorage();
  }

  isUserConnected(): boolean {
    //this.loadUserAuthStatusFromLocalStorage();
    return this.isUserAuthenticated;
  }

  getUserEmail(){
    if (!this.isUserConnected()){
      return "";
    }
    return this.signupFormData.email;
  }

  login(email: string, password: string) {
    if (email == this.signupFormData.email && password == this.signupFormData.password) {
      this.isUserAuthenticated = true;
      /*this.saveUserAuthStatusInLocalStorage();
      this.location.back();*/
      return this.isUserAuthenticated;
    }
    else {
      window.alert("You've entered false authentication informations ! Try again !");
      this.isUserAuthenticated= false;
      return this.isUserAuthenticated;
    }
  }

  logout() {
    this.router.navigate(["/login"]);
    //this.saveUserAuthStatusInLocalStorage()
  }

  saveUserAuthStatusInLocalStorage() {
    localStorage.setItem(this.authentication_key, JSON.stringify(this.isUserAuthenticated))
  }

  loadUserAuthStatusFromLocalStorage() {
    let savedUserAuthStatus = localStorage.getItem(this.authentication_key);
    if (savedUserAuthStatus) {
      this.isUserAuthenticated = JSON.parse(savedUserAuthStatus);
    }
  }

  signUp(email: string, password: string) {

    this.signupFormData.email=email;
    this.signupFormData.password=password;
    this.inscription.push(this.signupFormData)
     /*this.registration = {email: email, password: password};
    this.registrationData.push(this.registration);*/
    console.log(this.inscription);
  }
}
