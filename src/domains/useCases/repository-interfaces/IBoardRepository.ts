import { IBoardDTO } from "../../dto/interfaces/IBoardDTO";
import { ICommentDTO } from "../../dto/interfaces/ICommentDTO";

export interface IBoardRepository {
  getBoards(): Promise<Array<IBoardDTO>>;
  insertBoard(author: string, content: string): Promise<boolean>;
  getComments(): Promise<Array<ICommentDTO>>;
}
