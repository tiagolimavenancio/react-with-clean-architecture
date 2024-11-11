import { IBoardEntity } from "@domains/aggregates/interfaces/IBoard";
import { IBoardAction, IBoardActions } from "@adapters/presenters/action-interface/IBoard";
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
