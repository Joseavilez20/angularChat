import {CommentResponse} from "./comment.response";
import {StateEnum} from "../enums/state.enum";

export class ContentResponse {
  public content_id: number;
  public likes: number;
  public name: string;
  public description: string;
  public image: string;
  public created_at: Date;
  public updated_at: Date;
  public _comments: CommentResponse[];
  public _showComments: StateEnum;

  constructor(cont: number, like: number, nam: string, des: string, ima: string, creat: Date, updat: Date) {
    this.content_id = cont;
    this.likes = like;
    this.name = nam;
    this.description = des;
    this.image = ima;
    this.created_at = creat;
    this.updated_at = updat;
    this._comments = [];
    this._showComments = StateEnum.EMPTY;
  }
}
