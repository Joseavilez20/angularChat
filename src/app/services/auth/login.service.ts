import {Injectable} from '@angular/core';
import {LoginRequest} from '../../models/requests/login.request';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_LOGIN, API_LOGOUT} from "../../../utils/domains/uris";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private authService: AuthenticationService) {
  }

  public myLogin(myCredential: LoginRequest): Observable<any> {
    return this.http.post<LoginRequest>(API_LOGIN, myCredential);
  }

  public logout(): Observable<any> {
    this.authService.logout();
    return this.http.post(API_LOGOUT, null);
  }
 
}
