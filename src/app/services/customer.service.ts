import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string="http://localhost:8888/CUSTOMER-SERVICE/customers"
  constructor(private http:HttpClient) { }

  getAllCustomers(): Observable<Array<any>>{
    return this.http.get<Array<any>>(this.url)
  }
}
