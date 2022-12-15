import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  customerId!: number
  orders!:any
  errorMessage!:string


  constructor(private router:Router, 
    private route:ActivatedRoute,
    private http:HttpClient) {}

  ngOnInit():void{
    this.customerId = this.route.snapshot.params['customerId']

    
    this.http.get("http://localhost:8888/BILLING-SERVICE/bills/search/byCustomerId?customerId="+this.customerId+"&projection=fullBill")
    .subscribe({
      next:data=>{
        this.orders=data
      },
      error:err=>{
        this.errorMessage = err.message
      }
    })
  }

  handleOrderDetails(order: any){
    this.router.navigateByUrl("order-details/"+ order.id)
  }
}
