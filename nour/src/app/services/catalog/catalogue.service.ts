import { Injectable } from '@angular/core';
import {Product} from "../../model/product";
import {BehaviorSubject, catchError, observable, Observable, of} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ApiProductResponse} from "../../model/apiProductResponse";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  baseUrl : string = "https://dummyjson.com";
  product:Product[] = [];



  /*constructor(private http:HttpClient) {

  }

  getAllProducts():Observable<ApiProductResponse >{
    let fullUrl:string = this.baseUrl + "/products";
    return this.http.get<ApiProductResponse>(fullUrl).pipe(
      catchError(this.handleError<ApiProductResponse>("getProducts"))
    )

  }

  getProductBySearchWord(searchWord: string){
    let fullUrl:string = this.baseUrl + "/products/search?q="+searchWord;
    return this.http.get<ApiProductResponse>(fullUrl).pipe(
      catchError(this.handleError<ApiProductResponse>("getProducts"))
    )

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getProductbyId(id:number):Observable<Product>{
    let fullUrl: string = this.baseUrl + `/products/${id}`;
    return this.http.get<Product>(fullUrl).pipe(
      catchError(this.handleError<Product>("getProducts"))
    )
  }
*/

  constructor(private http:HttpClient) { }


  getAllProducts(){
    return this.http.get('https://dummyjson.com/products' );
  }

  getProduct(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }


  private filteredProductsSubject = new BehaviorSubject<any[]>([]);
  filteredProducts = this.filteredProductsSubject.asObservable();
  updateFilteredProducts(filteredProducts: any[]) {
    this.filteredProductsSubject.next(filteredProducts);
  }

  search(query: string): Observable<any> {
    const url = `https://dummyjson.com/products?search=${query}`;
    return this.http.get(url);
  }

  getbyKey(key:any){
    return this.http.get("https://dummyjson.com/products/search?q="+key)
  }

  getProductBySearchWord(searchWord: string){
    let fullUrl:string = this.baseUrl + "/products/search?q="+searchWord;
    return this.http.get<ApiProductResponse>(fullUrl).pipe(
      catchError(this.handleError<ApiProductResponse>("getProducts"))
    )

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getProductbyId(id:number):Observable<Product>{
    let fullUrl: string = this.baseUrl + `/products/${id}`;
    return this.http.get<Product>(fullUrl).pipe(
      catchError(this.handleError<Product>("getProducts"))
    )
  }

}
