import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  products: any
  constructor(private http:HttpClient){}

  ngOnInit():void{
    this.http.get("http://localhost:8888/INVENTORY-SERVICE/products").subscribe({
      next:data => {
        //this.products = data;
        console.log("hhhhhhhhhhhhhhhhhhhhhh data")
        console.log(data);
      },
      error:err => {
        console.log("hhhhhhhhhhhhhhhhhhhhhh error")
        console.log(err);
      }
    })
  }
}
