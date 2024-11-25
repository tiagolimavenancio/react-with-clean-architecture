import BoardPresenter from "adapters/presenters/BoardPresenter";
import SessionPresenter from "adapters/presenters/SessionPresenter";
import IUseCases from "./interfaces/IUseCases";
import IActions from "./interfaces/IActions";

export default (useCases: IUseCases, actions: IActions) => {
  return {
    board: new BoardPresenter(useCases.board, actions.board),
    session: new SessionPresenter(useCases.session, actions.session),
  };
};
