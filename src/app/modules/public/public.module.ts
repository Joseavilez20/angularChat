import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PublicComponent } from './public.component';
import { FormsModule } from '@angular/forms';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PublicComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ToastrModule.forRoot()
  ]
})
export class PublicModule { }
