import SessionPresenter from "adapters/presenters/SessionPresenter";
import BoardPresenter from "adapters/presenters/BoardPresenter";
import IUseCases from "di/interfaces/IUseCases";

export default (useCases: IUseCases) => {
  return {
    board: new BoardPresenter(useCases.board),
    session: new SessionPresenter(useCases.session),
  };
};
