export class LikeResponse {
  public like_id: number;
  public like: boolean;
  public user: number;
  public content: number;

  constructor(like_id: number, like: boolean, user: number, content: number) {
    this.like_id = like_id;
    this.like = like;
    this.user = user;
    this.content = content;
  }
}
