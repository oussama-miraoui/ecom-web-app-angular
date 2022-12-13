import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  products!: any
  errorMessage!:string
  constructor(private productService:ProductService, private http:HttpClient){}

  ngOnInit():void{
    this.handleGetAllProducts();
  }

  handleGetAllProducts(){
    // this.http.get("http://localhost:8888/INVENTORY-SERVICE/products").subscribe({
    //   next:data=>{
    //     this.products = data
    //   }, 
    //   error: err=>{
    //     this.errorMessage = err
    //   }
    // })

    this.productService.getAllProducts().subscribe({
      next: data=>{
        //console.log(data)
        this.products = data
      },
      error:err=> this.errorMessage = err.message
    })
  }
}
