import { IBoardAction, IBoardActions, IBoardPresenter } from "./interfaces/IBoardPresenter";
import { IBoardEntity } from "../../domains/aggregates/interfaces/IBoardEntity";
import { IBoardUseCase } from "../../domains/useCases/interfaces/IBoardUseCase";

class BoardPresenter implements IBoardPresenter {
  constructor(private readonly useCase: IBoardUseCase, private readonly action: IBoardActions) {}

  async getBoards(): Promise<IBoardAction> {
    const boardEntityList: Array<IBoardEntity> = await this.useCase.getBoards();
    return this.action.getBoards(boardEntityList);
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.useCase.insertBoard(author, content);
  }
}

export default BoardPresenter;
