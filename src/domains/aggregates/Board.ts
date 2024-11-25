import { ICommentEntity } from "../entities/interfaces/ICommentEntity";
import { IBoardData, IBoardEntity } from "./interfaces/IBoardEntity";

class Board implements IBoardEntity {
  private readonly _id: number;
  private readonly _author: string;
  private readonly _content: string;
  private readonly _createAt: Date;
  private _comments: Array<ICommentEntity>;

  constructor(params: IBoardData) {
    this._id = params.id;
    this._author = params.author;
    this._content = params.content;
    this._createAt = params.createAt;
    this._comments = [];
  }

  get id() {
    return this._id;
  }

  get comments() {
    return this._comments;
  }

  get author() {
    return this._author;
  }

  get content() {
    return this._content;
  }

  get createAt() {
    return this._createAt;
  }

  pushComment(commentList: Array<ICommentEntity>) {
    this._comments = this._comments.concat(commentList);
    return this;
  }
}

export default Board;
