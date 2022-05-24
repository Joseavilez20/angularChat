import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRequest } from 'src/app/models/requests/login.request';
import * as url  from '../../../utils/domains/uris';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

public objLogin: LoginRequest;
public api_login = url.API_LOGIN;

  constructor(private http: HttpClient, private router: Router) {
    this.objLogin = this.inicializarUsuario();
  }

  public obtenerToken() {
    return localStorage.getItem('token')
  }

  /**
   * Inicializar usuario
   */
  public inicializarUsuario(){
    return new LoginRequest('','')
  }

  /**
   * IniciarSesion
   */
  public iniciarSesion (objLogin: LoginRequest): Observable<LoginRequest> {
    return this.http.post<LoginRequest>(this.api_login + '/', objLogin);
  }
}
