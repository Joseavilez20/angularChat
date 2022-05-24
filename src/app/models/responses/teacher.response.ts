export class TeacherResponse {
  public teacher_id: number;
  public first_name: string;
  public last_name: string;
  public email: string;
  public photo: string | null;
  public username: string;

  constructor(teacher_id: number, first_name: string, last_name: string, email: string, photo: string | null, username: string) {
    this.teacher_id = teacher_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.photo = photo;
    this.username = username;
  }
}
