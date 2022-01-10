import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigningUpComponent } from './components/signing-up/signing-up.component';

const routes: Routes = [
  {
    path:'register',
    component:SigningUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
