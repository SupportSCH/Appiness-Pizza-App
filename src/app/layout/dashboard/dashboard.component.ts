import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  OrderList: any = [];
  order_received: number;
  preparing: number;
  ready_to_deliver: number;
  out_for_delivery: number;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getOrdersList()
      .subscribe(res => {
        this.OrderList = res;
        this.order_received = this.OrderList.filter(order => order.statusCode == 0 ).length;
        this.preparing = this.OrderList.filter(order => order.statusCode == 1 ).length;
        this.ready_to_deliver = this.OrderList.filter(order => order.statusCode == 2 ).length;
        this.out_for_delivery = this.OrderList.filter(order => order.statusCode == 3 ).length;
      })
  }

}
