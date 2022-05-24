import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {API_SIGNUP} from "../../../utils/domains/uris";
import {SignupRequest} from '../../models/requests/signup.request';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient ) { }

  public myRegister(myCredential: SignupRequest): Observable<any>{
    return this.http.post<SignupRequest>(API_SIGNUP,myCredential);
  }
}
