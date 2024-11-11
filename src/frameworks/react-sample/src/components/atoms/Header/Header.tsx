import { useDispatch } from "react-redux";
import di from "@src/di";
import { Button } from "../Button";
import * as S from "./Header.style";

const Header = () => {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(di.session.removeToken());
  };

  return (
    <S.Header>
      <S.Logo>React with Clean architecture</S.Logo>
      <S.BtnArea>
        <Button variant="short" type="button" onClick={handleClickLogout} value="Logout" />
      </S.BtnArea>
    </S.Header>
  );
};

export { Header };
