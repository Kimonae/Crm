import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './Pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './Pages/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './Pages/page-list-clients/page-list-clients.component';

const routes: Routes = [

  {path : '', component: PageListClientsComponent},
  {path : 'add', component: PageAddClientComponent},
  {path : 'edit', component: PageEditClientComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ClientsRoutingModule { }
