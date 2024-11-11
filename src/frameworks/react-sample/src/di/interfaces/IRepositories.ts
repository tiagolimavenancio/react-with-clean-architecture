import { ISessionRepository } from "@domains/useCases/repositories-interfaces/ISession";
import { IBoardRepository } from "@domains/useCases/repositories-interfaces/IBoard";

export default interface IRepositories {
  session: ISessionRepository;
  board: IBoardRepository;
}
