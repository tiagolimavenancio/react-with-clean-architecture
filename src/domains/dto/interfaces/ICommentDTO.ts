export interface ICommentParams {
  id: number;
  boardId: number;
  author: string;
  content: string;
  createAt: Date;
}

export interface ICommentDTO {
  readonly id: number;
  readonly boardId: number;
  readonly author: string;
  readonly content: string;
  readonly createAt: Date;
}
