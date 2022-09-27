import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

  constructor(

private activatedRoute : ActivatedRoute, //extraire l'élément dynamique de l'url, ici l'id
private ordersService : OrdersService
  ) {
   const id = Number(this.activatedRoute.snapshot.paramMap.get('id')); //trouver  l'id
    console.log(typeof(id), id ); //typeof = donne le type
this.ordersService.getItemById(id).subscribe((data)=> {

  console.log(data, ' obj by clic');


})
   }

  ngOnInit(): void {
  }

}
