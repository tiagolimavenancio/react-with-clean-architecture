import SessionUseCase from "domains/useCases/SessionUseCase";
import IRepositories from "di/interfaces/IRepositories";
import IUseCases from "di/interfaces/IUseCases";

export default (repositories: IRepositories): IUseCases => {
  return {
    session: new SessionUseCase(repositories.session),
  };
};
