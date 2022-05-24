import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'terminos', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recoverpassword', component: RecoverPasswordComponent },


  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 // { path: '**', component: LoginComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PublicRoutingModule { }
