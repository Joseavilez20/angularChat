export class LoginResponse {
  public user: UserBasic;
  public access_token: string;
  public fist_time_login: boolean;

  constructor(user: UserBasic, access_token: string, fist_time_login: boolean) {
    this.user = user;
    this.access_token = access_token;
    this.fist_time_login = fist_time_login;
  }
}

export class UserBasic {
  public first_name: string;
  public last_name: string;
  public username: string;
  public type_user: string;
  public email: string;
  public school_id: number;

  constructor(first_name: string, last_name: string, username: string, type_user: string, email: string, school_id: number) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
    this.type_user = type_user;
    this.email = email;
    this.school_id = school_id;
  }
}
