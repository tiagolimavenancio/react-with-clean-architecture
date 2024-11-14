import { IBoardPresenter } from "./interfaces/IBoardPresenter";
import { IBoardEntity } from "../../domains/aggregates/interfaces/IBoardEntity";
import { IBoardUseCase } from "../../domains/useCases/interfaces/IBoardUseCase";

class BoardPresenter implements IBoardPresenter {
  constructor(private readonly useCases: IBoardUseCase) {}

  async getBoards(): Promise<Array<IBoardEntity>> {
    return await this.useCases.getBoards();
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.useCases.insertBoard(author, content);
  }
}

export default BoardPresenter;
