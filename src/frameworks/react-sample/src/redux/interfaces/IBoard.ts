import { IBoardList, IBoardAction } from "adapters/presenters/interfaces/IBoardPresenter";

export const GET_BOARD = "GET_BOARD";

export interface IBoardStateGroup {
  board: IBoardList;
}

export interface IReducer {
  (state: IBoardList, action: IBoardAction): IBoardList;
}
