import * as React from "react";
import { IBoardData } from "domains/aggregates/interfaces/IBoard";
import * as S from "./BoardItem.style";

type IBoardItemProps = {
  board: IBoardData;
};

const BoardItem: React.FC<IBoardItemProps> = (props) => {
  const {
    board: { id, author, content, createAt },
  } = props;
  const createDate = new Date(createAt);

  return (
    <S.Item>
      <S.Text>{id}</S.Text>
      <S.Text>{author}</S.Text>
      <S.Text>{content}</S.Text>
      <S.Text>{`${createDate.getFullYear()}-${
        createDate.getMonth() + 1
      }-${createDate.getDate()}`}</S.Text>
    </S.Item>
  );
};

export { BoardItem };
