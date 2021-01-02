import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service'

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  OrderList: any = [];
  loader: boolean = true;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getOrdersList()
    .subscribe(res => {
      this.OrderList = res;

      setTimeout(()=> {
        this.loader = false;
      },300)
      
    })
  }


}
