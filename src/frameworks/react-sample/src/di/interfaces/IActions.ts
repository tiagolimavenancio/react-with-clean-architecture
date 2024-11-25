import { IBoardActions } from "adapters/presenters/interfaces/IBoardPresenter";
import { ISessionActions } from "adapters/presenters/interfaces/ISessionPresenter";

export default interface IActions {
  session: ISessionActions;
  board: IBoardActions;
}
