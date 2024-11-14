import { IBoardUseCase } from "./interfaces/IBoardUseCase";
import { IBoardRepository } from "./repository-interfaces/IBoardRepository";
import { IBoardEntity } from "../aggregates/interfaces/IBoardEntity";
import Board from "../aggregates/Board";
import Comment from "../entities/Comment";

class BoardUseCase implements IBoardUseCase {
  constructor(private readonly boardRepo: IBoardRepository) {}

  async getBoards(): Promise<Array<IBoardEntity>> {
    const boarDTOList = await this.boardRepo.getBoards();
    const commentDTOList = await this.boardRepo.getComments();

    return boarDTOList.map((board) => {
      const comments = commentDTOList
        .filter((comment) => comment.boardId === board.id)
        .map((comment) => new Comment(comment));
      const boardEntity = new Board(board).pushComment(comments);
      return boardEntity;
    });
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.boardRepo.insertBoard(author, content);
  }
}

export default BoardUseCase;
