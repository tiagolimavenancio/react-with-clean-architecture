import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@hooks/useStore";
import di from "@src/di";
import AuthForm from "@components/molecules/AuthForm/AuthForm";
import * as S from "./Login.style";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickAccreditation = async (id: string, pw: string) => {
    const token = await di.session.login(id, pw);
    if (token) {
      dispatch(token);
      navigate("/");
    }
  };

  return (
    <S.AuthArea>
      <AuthForm accredit={handleClickAccreditation} btnValue={"Login"} />
    </S.AuthArea>
  );
}

export { Login };
