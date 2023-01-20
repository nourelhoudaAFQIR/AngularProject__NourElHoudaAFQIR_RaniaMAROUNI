import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {CartComponent} from "./cart/cart.component";
import {OrderConfirmationComponent} from "./order-confirmation/order-confirmation.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {DetailOrderComponent} from "./detail-order/detail-order.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const routes: Routes = [
  // {path:"home",component:HomePageComponent},
  {path:"catalog", component:ProductListComponent},
  {path:"detail/:id", component: ProductDetailComponent},
  {path: "cart",component:CartComponent},
  // {path:"",redirectTo:"home",pathMatch:"full"},
  { path: 'confirm', component:OrderConfirmationComponent},
  { path: 'commands', component:OrderListComponent},
  { path: 'commands/:id', component:DetailOrderComponent},
  // { path: 'register', component:RegisterComponent},
  { path: 'signUp', component:SignUpComponent},
  { path: 'login', component:LoginComponent},
  // { path: 'signUp', component:SignUpComponent},
  {path:"**",redirectTo:"login"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
