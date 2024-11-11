import { IBoardEntity } from "@domains/aggregates/interfaces/IBoard";

export interface IBoardUseCase {
  getBoards(): Promise<Array<IBoardEntity>>;
  insertBoard(author: string, content: string): Promise<boolean>;
}
