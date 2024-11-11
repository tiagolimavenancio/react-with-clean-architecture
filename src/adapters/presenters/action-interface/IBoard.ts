import { IBoardEntity } from "@domains/aggregates/interfaces/IBoard";

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
