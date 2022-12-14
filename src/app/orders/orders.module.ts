import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './page/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './page/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './page/page-edit-order/page-edit-order.component';
import { TemplatesModule } from '../templates/templates.module';
import { SharedModule } from '../shared/shared.module';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
    FormOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    TemplatesModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
