import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  orderId!: number;
  products!: any
  errorMessage!: string;

  constructor(
    private http: HttpClient,
    private route:ActivatedRoute
    ) {}


  ngOnInit() : void{
    this.orderId = this.route.snapshot.params['orderId']    

    console.log(this.orderId);

    this.http.get("http://localhost:8888/BILLING-SERVICE/fullBill/"+this.orderId)
    .subscribe({
      next:data=>{
        // console.log(data);
        this.products = data
      },
      error:err=>{
        console.log(err.message);
        this.errorMessage = err.message
      }
    })
  }
}
