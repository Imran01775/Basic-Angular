import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserInfoRoutingModule } from './user-info-routing.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserInfoModule { }
