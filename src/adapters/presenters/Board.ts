import { IBoardAction, IBoardActions } from "@adapters/presenters/action-interface/IBoard";
import { IBoardPresenter } from "@adapters/presenters/interfaces/IBoard";
import { IBoardEntity } from "@domains/aggregates/interfaces/IBoard";
import { IBoardUseCase } from "@domains/useCases/interfaces/IBoard";

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
