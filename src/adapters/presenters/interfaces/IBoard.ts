import { IBoardAction } from "@adapters/presenters/action-interface/IBoard";

export interface IBoardPresenter {
  getBoards(): Promise<IBoardAction>;
  insertBoard(author: string, content: string): Promise<boolean>;
}
