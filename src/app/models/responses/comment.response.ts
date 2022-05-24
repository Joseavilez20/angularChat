export class CommentResponse {
  public text: string;
  public content: string;
  public user: User;

  constructor(text: string, content: string, user: User) {
    this.text = text;
    this.content = content;
    this.user = user;
  }
}

export class User {
  public first_name: string;
  public last_name: string;
  public username: string;

  constructor(first_name: string, last_name: string, username: string) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
  }
}
