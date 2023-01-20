import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {CatalogueService} from "../services/catalog/catalogue.service";
import {CategoryService} from "../services/category/category.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
/*
  products:Product[]= [];
  category: any;
  loading: boolean=false;

  constructor(private catalogServices:CatalogueService,private categoryService: CategoryService  ) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getProducts();
    this.getProductsCategories();
  }

  getAllProducts(){
    this.catalogServices.getAllProducts().subscribe(
      apiProductResponse => this.products = apiProductResponse.products
    )

  }

  searchProduct(searchWord: string) {
    this.catalogServices.getProductBySearchWord(searchWord).subscribe(
      apiProductResponse => this.products = apiProductResponse.products
    )
  }

  filterCategory(event: Event) {
    // @ts-ignore
    let value=event.target.value
    if(value=='all'){
      this.getProducts();
    }else{
      this.getProductsCategories(value);
    }
  }

  getProductsCategories(keyword:string){
    this.loading=true;
    this.categoryService.getProductByCategory(keyword).subscribe((res:any)=>{
        this.loading=false;
        this.products=res.products;
        console.log(res)},
      error =>{
        this.loading=false;
        alert(error.message)
      });

  }
  getProducts(){

    this.loading=true;
    this.catalogServices.getAllProducts().
    subscribe((res:any)=>{

        this.products=res.products
        this.loading=false},
      error =>{

        this.loading=true;
        alert(error.message);
        this.loading=false;
      });

  }*/

  products:any[]=[];
  word:string='';

  category:any[]=[];
  loading: boolean=false;

  filteredProducts: any[]=[];
  constructor(private productService:CatalogueService,private categoryService:CategoryService,private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      keywords: ''
    });

  }


  ngOnInit(){
    this.getProducts();
    this.getCategories();
    /* this.productService.filteredProducts.subscribe(filteredProducts => {
       this.products = filteredProducts;
     });*/


  }

  getProducts(){

    this.loading=true;
    this.productService.getAllProducts().
    subscribe((res:any)=>{

        this.products=res.products
        this.loading=false},
        (error: { message: any; }) =>{

        this.loading=true;
        alert(error.message);
        this.loading=false;
      });

  }

  detectChanges($event: Event) {

  }

  getCategories(){
    this.loading=true;
    this.categoryService.getCategory().subscribe((res:any)=>{
        this.loading=false;
        this.category=res;
        console.log(res)},
      error =>{
        this.loading=false;
        alert(error.message)
      });

  }

  value:any

  /*getProductCategory(event:any){
    this.loading=true;
    this.value=event.target.value;
    console.log(this.value)

     this.categoryService.getProductByCategory(this.value).subscribe((res:any)=>{

        this.products=res;
         this.loading=false;
        console.log(res)},
      error =>{

        alert(error.message)
        this.loading=false;
      });

  }*/
  searchForm: any;

  filterCategory(event:any) {
    let value=event.target.value
    if(value=='all'){
      this.getProducts();
    }else{
      this.getProductsCategories(value);
    }

  }

  getProductsCategories(keyword:string){
    this.loading=true;
    this.categoryService.getProductByCategory(keyword).subscribe((res:any)=>{
        this.loading=false;
        this.products=res.products;
        console.log(res)},
      error =>{
        this.loading=false;
        alert(error.message)
      });

  }

  product:any;

  filterProducts(event: any) {

    for(this.product in this.products){
      if(this.product.title==event){
        // this.productService.getProduct(this.product.id).subscribe((produit:any) => (this.products = produit));
        this.products=this.product;
      }
    }
    console.log(event)

  }

  searchProduct(searchWord: string) {
    this.productService.getProductBySearchWord(searchWord).subscribe(
      apiProductResponse => this.products = apiProductResponse.products
    )
  }

  chercher() {
    this.productService.getbyKey(this.word)
      .subscribe((val:any)=>{
        this.products = val.products
      })
  }

}
