export class SignupRequest {
  public first_name: string;
  public last_name: string;
  public birthday_date: string;
  public school: string;
  public teacher: string;
  public username: string;
  public email: string;
  public password: string;
  public password_confirm: string;  
  public terms: boolean;

  constructor(
    firstname: string,
    lastname: string,
    birth: string,
    school: string,
    teach: string,
    username: string,
    email: string,
    password: string,
    repasswor: string,
    term: boolean,
  ) {
    this.first_name = firstname;
    this.last_name = lastname;
    this.birthday_date = birth;
    this.school = school;
    this.teacher = teach;
    this.username = username;
    this.email = email;
    this.password = password;
    this.password_confirm = repasswor;  
    this.terms = term;
  }



}
