import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './Pages/page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './Pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './Pages/page-edit-client/page-edit-client.component';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';


@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientComponent,
    PageEditClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    TemplatesModule
  ]
})
export class ClientsModule { }
