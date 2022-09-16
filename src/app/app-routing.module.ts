import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSignInComponent } from './login/page/page-sign-in/page-sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },//redirection sur sign-in, full = complète restriction
  { path: 'sign-in', component: PageSignInComponent },//va chercher le composant
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
