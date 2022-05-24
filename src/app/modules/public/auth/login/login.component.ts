import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginRequest } from 'src/app/models/requests/login.request';
import { LoginService } from 'src/app/services/auth/login.service';
import { mostrarMensaje } from 'src/utils/messages/message';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public objusuarioSeleccionado: LoginRequest;

  public tmp: any;
  public subscription: Subscription;


  constructor(public loginService: LoginService, public miMensaje: ToastrService, public router: Router) {
    this.objusuarioSeleccionado =this.inicializarUsuario();
    this.subscription = this.tmp;
   }
  
   public inicializarUsuario(): LoginRequest {
    return new LoginRequest('', '');
  }

  public verificarDatos(formulario: NgForm): void {
    const correo = this.objusuarioSeleccionado.email.toLowerCase().trim();
    const clave = this.objusuarioSeleccionado.password;
    // colocar todos los campos de registro como arriba(correo y clave)
    const login = new LoginRequest(correo,clave);
    // crear constante nuevo usuario reemplazando loginRequest por modelo usuarioregistro 


    console.log(login, "********************************")
    
    this.subscription = this.loginService.myLogin(login).subscribe((res) => {
      mostrarMensaje('success', 'Bienvenido', 'Inicio de sesión', this.miMensaje);
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
