import { ISessionUseCase } from "domains/useCases/interfaces/ISessionUseCase";
import { IBoardUseCase } from "domains/useCases/interfaces/IBoardUseCase";

export default interface IUseCases {
  session: ISessionUseCase;
  board: IBoardUseCase;
}
