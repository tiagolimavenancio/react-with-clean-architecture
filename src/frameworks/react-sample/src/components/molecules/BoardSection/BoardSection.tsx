import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/useStore";
import { IBoardEntity } from "@domains/aggregates/interfaces/IBoard";
import di from "../../../di";
import { IBoardStateGroup } from "../../../redux/interfaces/IBoard";
import BoardVM from "../../../vm/Board";
import { BoardList } from "../../atoms/BoardList";
import { AddBoard } from "../../atoms/AddBoard";
import * as S from "./BoardSection.style";

const BoardSection: React.FC = () => {
  const dispatch = useAppDispatch();

  const list: Array<IBoardEntity> = useAppSelector((state: IBoardStateGroup) => state.board.list);
  const boardVMList = list.map((boardEntity) => new BoardVM(boardEntity));

  useEffect(() => {
    const asyncFnc = async () => {
      const board = await di.board.getBoards();
      dispatch(board);
    };

    asyncFnc();
  }, []);

  const insertFnc = async (author: string, content: string) => {
    const resStatus = await di.board.insertBoard(author, content);
    if (resStatus) {
      const board = await di.board.getBoards();
      dispatch(board);
    }
  };

  return (
    <>
      <S.Section>
        <S.Title>Board</S.Title>
        <BoardList list={boardVMList} />
      </S.Section>
      <S.Section>
        <S.Title>Add Post</S.Title>
        <AddBoard insertFnc={insertFnc} />
      </S.Section>
    </>
  );
};

export { BoardSection };
