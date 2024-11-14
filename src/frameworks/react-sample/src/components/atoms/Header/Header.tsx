import di from "di";
import { useSetToken } from "hooks/useSessionRecoil";
import { Button } from "../Button";
import * as S from "./Header.style";

const Header = () => {
  const setUserToken = useSetToken();

  const handleClickLogout = () => {
    di.session.removeToken();
    setUserToken("");
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
