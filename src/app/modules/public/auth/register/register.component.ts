import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { SignupRequest } from 'src/app/models/requests/signup.request';
import { RegisterService } from 'src/app/services/auth/register.service';
import { mostrarMensaje } from 'src/utils/messages/message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public objusuarioSeleccionado: SignupRequest;
  public tmp: any;
  public subscription: Subscription;

  constructor(public singupService: RegisterService, public miMensaje: ToastrService, public router: Router) {
    this.objusuarioSeleccionado = this.inicializarUsuario();
    this.subscription = this.tmp;
  }

  public inicializarUsuario(): SignupRequest {
    return new SignupRequest('', '', '', '', '', '', '', '', '', false);
  }

  public verificarDatos(formulario: NgForm): void {
    const firstName = this.objusuarioSeleccionado.first_name;
    const lastName = this.objusuarioSeleccionado.last_name;
    const birthdayDate = this.objusuarioSeleccionado.birthday_date;
    const schoolName = this.objusuarioSeleccionado.school;
    const teacherName = this.objusuarioSeleccionado.teacher;
    const userName = this.objusuarioSeleccionado.username;
    const correo = this.objusuarioSeleccionado.email.toLowerCase().trim();
    const clave = this.objusuarioSeleccionado.password;
    const clave2 = this.objusuarioSeleccionado.password_confirm;
    const term = this.objusuarioSeleccionado.terms;
    // colocar todos los campos de registro como arriba(correo y clave)
    const register = new SignupRequest(firstName, lastName, birthdayDate, schoolName, teacherName, userName, correo, clave, clave2, term);
    // crear constante nuevo usuario reemplazando loginRequest por modelo usuarioregistro 

    console.log(register, "********************************")

    this.subscription = this.singupService.myRegister(register).subscribe((res) => {
      mostrarMensaje('success', 'Bienvenido' + firstName, 'a BotComp', this.miMensaje);
      localStorage.setItem('token', res.token as any);
      this.router.navigate(['/admin/dashboard'])
    }, (err) => {
      mostrarMensaje('error', 'no existen datos referente a esta cuenta', 'fallo', this.miMensaje);
      formulario.reset();
    });


  }
  ngOnInit(): void {
  }

}
