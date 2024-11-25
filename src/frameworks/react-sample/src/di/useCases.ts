import SessionUseCase from "domains/useCases/SessionUseCase";
import BoardUseCase from "domains/useCases/BoardUseCase";
import IUseCases from "./interfaces/IUseCases";
import IRepositories from "./interfaces/IRepositories";

export default (repositories: IRepositories): IUseCases => {
  return {
    board: new BoardUseCase(repositories.board),
    session: new SessionUseCase(repositories.session),
  };
};
