import { IBoardPresenter } from "adapters/presenters/interfaces/IBoardPresenter";
import { ISessionPresenter } from "adapters/presenters/interfaces/ISessionPresenter";

export default interface IPresenters {
  board: IBoardPresenter;
  session: ISessionPresenter;
}
