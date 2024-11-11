import { IBoardActions } from "@adapters/presenters/action-interface/IBoard";
import { ISessionActions } from "@adapters/presenters/action-interface/ISession";

export default interface IActions {
  session: ISessionActions;
  board: IBoardActions;
}
