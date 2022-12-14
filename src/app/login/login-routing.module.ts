import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './page/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './page/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './page/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './page/page-sign-up/page-sign-up.component';

const routes: Routes = [

  { path: 'sign-in', component: PageSignInComponent },//va chercher le composant
  { path: 'sign-up', component: PageSignUpComponent},
  { path: 'reset-password', component: PageResetPasswordComponent},
  { path: 'forgot-password', component: PageForgotPasswordComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
