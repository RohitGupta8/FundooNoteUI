import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigningUpComponent } from './components/signing-up/signing-up.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path:'register',
    component:SigningUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
