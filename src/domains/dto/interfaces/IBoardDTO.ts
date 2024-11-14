export interface IBoardParams {
  id: number;
  author: string;
  content: string;
  createAt: Date;
}

export interface IBoardDTO {
  readonly id: number;
  readonly author: string;
  readonly content: string;
  readonly createAt: Date;
}
