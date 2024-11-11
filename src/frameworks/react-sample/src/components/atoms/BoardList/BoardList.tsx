import * as React from "react";
import { BoardItem } from "../BoardItem";
import { CommentItem } from "../CommentItem";
import { IBoardVM } from "../../../vm/Board";
import * as S from "./BoardList.style";

type IBoardListProps = {
  list: Array<IBoardVM>;
};

const BoardList: React.FC<IBoardListProps> = (props) => {
  const { list } = props;

  return (
    <div>
      {list.length > 0 && (
        <S.List>
          {list.map((board) => (
            <li key={board.id}>
              <BoardItem board={board} />
              <S.Comment>
                {board.comments.map((comment) => (
                  <CommentItem key={comment.id} comment={comment} />
                ))}
              </S.Comment>
            </li>
          ))}
        </S.List>
      )}
    </div>
  );
};

export { BoardList };
