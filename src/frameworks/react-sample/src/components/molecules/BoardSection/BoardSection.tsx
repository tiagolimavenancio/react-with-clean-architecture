import React, { useEffect } from "react";
import { useBoardListState } from "hooks/useBoardRecoil";
import { BoardList } from "components/atoms/BoardList";
import { AddBoard } from "components/atoms/AddBoard";
import BoardVM from "vm/IBoardVM";
import di from "di";
import * as S from "./BoardSection.style";

const BoardSection: React.FC = () => {
  const [list, setList] = useBoardListState();
  const boardVMList = list.map((boardEntity) => new BoardVM(boardEntity));

  useEffect(() => {
    const asyncFnc = async () => {
      setList(await di.board.getBoards());
    };

    asyncFnc();
  }, [setList]);

  const insertFnc = async (author: string, content: string) => {
    const resStatus = await di.board.insertBoard(author, content);

    if (resStatus) {
      setList(await di.board.getBoards());
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
