import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { NgModule } from '@angular/core';

const routes:Routes = [
  {
    path: '', component: RegistrationComponent, pathMatch: 'full',
  },
  {
  path: 'registration', component: RegistrationComponent, pathMatch: 'full',
  },
  {
  path: 'login', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'forgetpassword', component: ForgetPasswordComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports :[RouterModule]
})
export class UserInfoRoutingModule { }
