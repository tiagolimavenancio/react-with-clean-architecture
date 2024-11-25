import { IBoardDTO, IBoardParams } from "./interfaces/IBoardDTO";

class BoardDTO implements IBoardDTO {
  readonly id: number;
  readonly author: string;
  readonly content: string;
  readonly createAt: Date;

  constructor(params: IBoardParams) {
    this.id = params.id;
    this.author = params.author;
    this.content = params.content;
    this.createAt = params.createAt;
  }
}

export default BoardDTO;
