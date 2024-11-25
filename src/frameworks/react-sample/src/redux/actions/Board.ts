import { IBoardEntity } from "domains/aggregates/interfaces/IBoardEntity";
import { IBoardAction, IBoardActions } from "adapters/presenters/interfaces/IBoardPresenter";
import { GET_BOARD } from "../interfaces/IBoard";

class BoardActions implements IBoardActions {
  getBoards(boardEntityList: Array<IBoardEntity>): IBoardAction {
    return {
      type: GET_BOARD,
      list: boardEntityList,
    };
  }
}

export default BoardActions;
