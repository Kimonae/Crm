import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageSignUpComponent } from './page/page-sign-up/page-sign-up.component';
import { PageResetPasswordComponent } from './page/page-reset-password/page-reset-password.component';
import { PageForgotPasswordComponent } from './page/page-forgot-password/page-forgot-password.component';


@NgModule({
  declarations: [
    PageSignUpComponent,
    PageResetPasswordComponent,
    PageForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
