import { IBoardEntity } from "../../aggregates/interfaces/IBoardEntity";

export interface IBoardUseCase {
  getBoards(): Promise<Array<IBoardEntity>>;
  insertBoard(author: string, content: string): Promise<boolean>;
}
