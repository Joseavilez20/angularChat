export class SignupRequest {
  public first_name: string;
  public last_name: string;
  public username: string;
  public password: string;
  public password_confirm: string;
  public birthday_date: string;
  public email: string;
  public school: string;
  public teacher: string;
  public terms: boolean;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    repasswor: string,
    username: string,
    birth: string,
    school: string,
    teach: string,
    term: boolean,
  ) {
    this.first_name = firstname;
    this.last_name = lastname;
    this.email = email;
    this.password = password;
    this.password_confirm = repasswor;
    this.username = username;
    this.birthday_date = birth;
    this.school = school;
    this.teacher = teach;
    this.terms = term;
  }



}
