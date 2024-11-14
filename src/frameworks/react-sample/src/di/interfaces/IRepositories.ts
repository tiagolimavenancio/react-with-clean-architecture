import { ISessionRepository } from "domains/useCases/repository-interfaces/ISessionRepository";
import { IBoardRepository } from "domains/useCases/repository-interfaces/IBoardRepository";
export default interface IRepositories {
  board: IBoardRepository;
  session: ISessionRepository;
}
