import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClients } from 'src/app/core/enum/state-clients';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public states = Object.values(StateClients);
  public titleParent: string = 'Liste des clients';

  public collection$ !: Observable<Client[]>;


  /*@Input() collection !: any;

  collectionn !: Client[];*/


  public headers: string [] = [
    "state",
    "tva",
    "id",
    "name",
    "totalCaHt",
    "comment",
  ];


  constructor(private clientsService: ClientsService) {


    this.collection$ = this.clientsService.collection;

  }

  ngOnInit(): void {



  }

}
