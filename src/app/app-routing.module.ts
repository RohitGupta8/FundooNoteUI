import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigningUpComponent } from './components/signing-up/signing-up.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'register',
    component:SigningUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
