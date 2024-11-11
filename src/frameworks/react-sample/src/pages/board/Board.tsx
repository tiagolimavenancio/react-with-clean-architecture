import { Header } from "@components/atoms/Header/Header";
import { BoardSection } from "@components/molecules/BoardSection";
import * as S from "./Board.style";

function Board() {
  return (
    <div>
      <Header />
      <S.Content>
        <BoardSection />
      </S.Content>
    </div>
  );
}

export { Board };
