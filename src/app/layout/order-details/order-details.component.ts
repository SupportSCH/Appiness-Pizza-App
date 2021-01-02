import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  loader: boolean = true;
  orderId: any;
  OrderDetails: any;
  constructor(private orderService: OrdersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get("id");
    this.getOrderDetails();
  }

  getOrderDetails(){
    this.orderService.getOrderDetails(this.orderId)
    .subscribe(res => {
      this.OrderDetails = res[0]; 
      setTimeout(()=> {
        this.loader = false;
      },500)
    })
  }

  statusChange(status) {    
    this.OrderDetails.statusCode = status;
    if(status == 0) {
      this.OrderDetails.status = 'Order Received';
    }
    if(status == 1) {
      this.OrderDetails.status = 'Preparing';
    } 
    if(status == 2) {
      this.OrderDetails.status = 'Ready to Deliver';
    } 
    if(status == 3) {
      this.OrderDetails.status = 'Out for Delivery';
    }
    this.orderService.updateOrderStatus(this.orderId, this.OrderDetails).
    subscribe(res => {
      this.getOrderDetails();
    })
    
  }

}
