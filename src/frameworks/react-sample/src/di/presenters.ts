import SessionPresenter from "adapters/presenters/SessionPresenter";
import IUseCases from "di/interfaces/IUseCases";

export default (useCases: IUseCases) => {
  return {
    session: new SessionPresenter(useCases.session),
  };
};
