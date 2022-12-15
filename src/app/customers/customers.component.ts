import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  customers: any
  errorMessage!: string

  constructor(private http:HttpClient, 
    private customerService:CustomerService,
    private router:Router
    ){}

  ngOnInit() : void{  
    this.handleGetAllCustomer();
  }

  handleGetAllCustomer(){
    /*this.http.get("http://localhost:8888/CUSTOMER-SERVICE/customers").subscribe({
      next:data=>{
        //console.log("hhhhhhhhhhh data", data)
        this.customers = data
      },
      error: err => {
        //console.log("hhhhhhhhhh error");
        this.errorMessage = err
      }
    })*/
    this.customerService.getAllCustomers().subscribe({
      next:data=>{
        this.customers = data
      },
      error:err=>{
        this.errorMessage = err.message
      }
    })

  }

  handleGetOrders(customer: any) {
   /* this.http.get("http://localhost:8888/BILLING-SERVICE/bills/search/byCustomerId?customerId="+customerId+"&projection=fullBill")
    .subscribe({
      next:data=>{
        console.log("customerId", customerId);
        console.log(data);
      },
      error:err=>{
        console.log(err)
      }
    })*/
    this.router.navigateByUrl("/orders/"+customer.id)
    
  }
}
