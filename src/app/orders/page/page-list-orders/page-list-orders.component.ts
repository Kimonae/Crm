import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titleParent: string = 'Liste des commandes';

  @Input() collection !: any;

  collectionParent !: Order[];


  public headers: string [] = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];


  constructor(private ordersService: OrdersService) {

    this.ordersService.collection.subscribe((data) => {
      console.log(data);
      this.collectionParent = data;
    });
  }

  ngOnInit(): void {
  }

}
