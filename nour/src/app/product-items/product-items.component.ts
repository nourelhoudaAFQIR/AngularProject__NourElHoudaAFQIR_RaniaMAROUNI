import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit{
  @Input()
  product?:Product;
  constructor() {
  }
  ngOnInit(): void {
  }



}
