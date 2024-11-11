import * as React from "react";
import { ICommentEntity } from "@domains/entities/interfaces/IComment";
import * as S from "./CommentItem.style";

type ICommentItemProps = {
  comment: ICommentEntity;
};

const CommentItem: React.FC<ICommentItemProps> = (props) => {
  const {
    comment: { author, content, createAt },
  } = props;
  const createDate = new Date(createAt);

  return (
    <S.Item>
      <S.Text>&rsaquo;</S.Text>
      <S.Text>{author}</S.Text>
      <S.Text>{content}</S.Text>
      <S.Text>{`${createDate.getFullYear()}-${
        createDate.getMonth() + 1
      }-${createDate.getDate()}`}</S.Text>
    </S.Item>
  );
};

export { CommentItem };
