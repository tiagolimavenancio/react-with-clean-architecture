import { IBoardDTO } from "@domains/dto/BoardDTO";
import { ICommentDTO } from "@domains/dto/CommentDTO";

export interface IBoardRepository {
  getBoards(): Promise<Array<IBoardDTO>>;
  insertBoard(author: string, content: string): Promise<boolean>;
  getComments(): Promise<Array<ICommentDTO>>;
}
