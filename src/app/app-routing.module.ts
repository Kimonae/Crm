import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSignInComponent } from './login/page/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/page/page-sign-up/page-sign-up.component';
import { PageResetPasswordComponent } from './login/page/page-reset-password/page-reset-password.component';
import { PageForgotPasswordComponent } from './login/page/page-forgot-password/page-forgot-password.component';


//routing
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },//redirection sur sign-in, full = complète restriction
  { path: 'sign-in', component: PageSignInComponent },//va chercher le composant
  { path: 'sign-up', component: PageSignUpComponent},
  { path: 'reset-password', component: PageResetPasswordComponent},
  { path: 'forgot-password', component: PageForgotPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
