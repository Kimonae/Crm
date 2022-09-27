import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public titleParent: string = 'Ajouter des commandes';



  public item = new Order();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(obj: Order) {

console.log(obj, "onAdd()")
  }
}
