import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {


  collection !: Client[];
  constructor(private clientsService: ClientsService) {

    this.clientsService.collection.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
