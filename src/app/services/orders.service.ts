import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  // get orders list
  getOrdersList() {
    return this.http.get(`${this.baseUrl}orders`)
  }

  // get order details
  getOrderDetails(orderID) {
    return this.http.get(`${this.baseUrl}orders?id=${orderID}`)
  }

  // update order status
  updateOrderStatus(orderID, order) {
    return this.http.patch(`${this.baseUrl}orders/${orderID}`, order)
  }
  
}
