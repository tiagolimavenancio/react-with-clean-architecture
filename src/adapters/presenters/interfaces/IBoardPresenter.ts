import { IBoardEntity } from "../../../domains/aggregates/interfaces/IBoardEntity";

export interface IBoardList {
  list: Array<IBoardEntity>;
}

export interface IBoardAction {
  type: string;
  list: Array<IBoardEntity>;
}

export interface IBoardActions {
  getBoards(boardEntityList: Array<IBoardEntity>): IBoardAction;
}

export interface IBoardPresenter {
  getBoards(): Promise<IBoardAction>;
  insertBoard(author: string, content: string): Promise<boolean>;
}
