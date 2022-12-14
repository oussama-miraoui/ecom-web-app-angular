import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string="http://localhost:8888/INVENTORY-SERVICE/products"

  constructor(private http:HttpClient) { }

  getAllProducts() : Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url)
  }
}
