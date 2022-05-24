export class LoginRequest {
  public email: string;
  public password: string;

  constructor(ema: string, pass: string) {
    this.email = ema;
    this.password = pass;
  }
}

