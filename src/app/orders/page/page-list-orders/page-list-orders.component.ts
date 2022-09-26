import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enum/state-order';
import { Order } from 'src/app/core/models/order';
import { __assign } from 'tslib';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public states = Object.values(StateOrder);
  public titleParent: string = 'Liste des commandes';

   //@Input() collection$ !: any;


  //collectionParent !: Order[];
  public collection$ !: Observable<Order[]>;


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

    /*this.ordersService.collection.subscribe((data) => {
      console.log(data);
      this.collectionParent = data;}*/

      this.collection$ = this.ordersService.collection;

  }

  ngOnInit(): void {
  }



public changeState(item : Order, event: Event)  {  //récup valeur state

  console.log("changed");
  //console.log(event);
  const target = event.target as HTMLSelectElement;
  //console.log(target);

  const state = target.value as StateOrder;
  //console.log(state);
  this.ordersService.changeState(item, state).subscribe(data=>{
    //console.log(data, 'renvoyé par API');


    Object.assign(item, data);
  })



}


 /*public total(val: number, coef: number, tva?:number)//optionnel
 {
  console.log('fonction total');*/
  /*if(tva) {

  return val * coef *(1 + tva/100)

  }
  return val * coef;*/



}


//}
