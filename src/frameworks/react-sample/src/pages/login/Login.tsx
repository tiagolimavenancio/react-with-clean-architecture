import AuthForm from "../../components/molecules/AuthForm/AuthForm";
import { useAuthContext } from "../../context/AuthContext";
import * as S from "./Login.style";

function Login() {
  const { login } = useAuthContext();

  const handleClickAccreditation = async (id: string, pw: string) => {
    if (id && pw) {
      const token = String(new Date(Date.now() + 60 * 60 * 1000));
      await login(token);
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
