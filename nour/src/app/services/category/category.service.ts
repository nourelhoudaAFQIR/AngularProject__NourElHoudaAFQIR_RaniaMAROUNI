import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }



  getCategory(){
    return this.http.get("https://dummyjson.com/products/categories")
  }

  getProductByCategory(product:any){
    return this.http.get("https://dummyjson.com/products/category/"+product);
  }
}
