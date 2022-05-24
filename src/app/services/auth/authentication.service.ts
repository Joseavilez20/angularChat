import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {EncryptionUtil} from "../../../utils/interceptors/encryption.util";
import {LoginResponse, UserBasic} from "../../models/responses/login.response";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly keyName: string;
  private readonly passwordHash: string;
  public currentUser: LoginResponse;

  constructor(private router: Router) {
    this.currentUser = new LoginResponse(
      new UserBasic('', '','', '', '',0),
      '', true);
    this.keyName = 'tkn';
    this.passwordHash = 'secret'; //Env
  }

  public verifySession(): boolean {
    const info = this.getTokenFromStorage();
    if (info) {
      const decryptInfo = EncryptionUtil.get(this.passwordHash, info);
      const object = this.convertToObject(decryptInfo);
      if (decryptInfo && decryptInfo !== '' && object) {
        this.currentUser = object;
        return true;
      }
    }
    this.removeItem();
    return false;
  }

  public logout(): void {
    this.removeItem();
    this.router.navigate(['/login']).then((r) => r);
  }

  public removeItem(): void {
    this.resetUser();
    localStorage.removeItem(this.keyName);
  }

  public getTokenFromStorage(): string {
    return <string>localStorage.getItem(this.keyName);
  }

  public getCurrentUser(): LoginResponse {
    return this.currentUser;
  }

  public setUserInfo(data: string): void {
    const encryptedInfo = EncryptionUtil.set(this.passwordHash, JSON.stringify(data));
    localStorage.setItem(this.keyName, encryptedInfo);
  }

  private convertToObject(data: string): any{
    let response = '';
    try {
      response = JSON.parse(data);
    } catch(e) {
    }
    return response;
  }

  private resetUser(): void{
    this.currentUser = new LoginResponse(
      new UserBasic('', '','', '', '',0),
      '', true);
  }

}
