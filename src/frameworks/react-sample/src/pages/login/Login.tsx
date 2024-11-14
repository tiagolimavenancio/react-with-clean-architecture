import { useAuthContext } from "context/AuthContext";
import AuthForm from "components/molecules/AuthForm/AuthForm";
import * as S from "./Login.style";

function Login() {
  const { login } = useAuthContext();

  const handleClickAccreditation = async (id: string, pw: string) => {
    if (id && pw) {
      await login(id, pw);
    } else {
      console.log("Invalid data!");
    }
  };

  return (
    <S.AuthArea>
      <AuthForm accredit={handleClickAccreditation} btnValue={"Login"} />
    </S.AuthArea>
  );
}

export { Login };
