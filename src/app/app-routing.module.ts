import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { OrderDetailsComponent } from './layout/order-details/order-details.component';
import { OrdersListComponent } from './layout/orders-list/orders-list.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';


const routes: Routes = [
  {
    path:'',
    component:ToolbarComponent,
    children : [
      {
        path:'',
        component: DashboardComponent
      },
      {
        path:'orders',
        component: OrdersListComponent
      },
      {
        path:'orders/:id',
        component: OrderDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
