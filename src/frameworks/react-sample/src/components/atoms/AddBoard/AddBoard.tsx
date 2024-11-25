import React, { useState } from "react";
import { Input } from "components/atoms/Input";
import { Button } from "components/atoms/Button";
import * as S from "./AddBoard.style";

type IAddBoardProps = {
  insertFnc(author: string, content: string): void;
};

const AddBoard: React.FC<IAddBoardProps> = (props) => {
  const { insertFnc } = props;
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.name === "author") {
      setAuthor(value);
    }
    if (event.target.name === "content") {
      setContent(value);
    }
  };

  const handleClickInsertBoard = () => {
    setAuthor("");
    setContent("");
    insertFnc(author, content);
  };

  const handleKeyDownInsertBoard = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      handleClickInsertBoard();
    }
  };

  return (
    <section>
      <S.Area>
        <S.Box>
          <Input
            type="text"
            name="author"
            placeholder="author"
            onChange={handleChangeInput}
            onKeyDown={() => {}}
            value={author}
          />
        </S.Box>
        <S.Box>
          <Input
            type="text"
            name="content"
            placeholder="content"
            onChange={handleChangeInput}
            onKeyDown={handleKeyDownInsertBoard}
            value={content}
          />
        </S.Box>
        <S.Wrapper>
          <Button variant="long" type="button" value="Add" onClick={handleClickInsertBoard} />
        </S.Wrapper>
      </S.Area>
    </section>
  );
};

export { AddBoard };
