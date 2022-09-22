import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titleParent: string = 'Liste des commandes';
  constructor(private ordersService: OrdersService) {

    this.ordersService.collection.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
