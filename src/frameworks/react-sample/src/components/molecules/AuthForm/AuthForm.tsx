import { useState } from "react";
import { Input } from "@components/atoms/Input";
import { Button } from "@components/atoms/Button";
import * as S from "./AuthForm.style";

type AuthFormProps = {
  accredit(id: string, pw: string): void;
  btnValue: string;
};

const AuthForm = ({ btnValue, accredit }: AuthFormProps) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleChangeClientInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updateFn = event.target.name === "id" ? setId : setPw;
    updateFn(event.target.value);
  };

  const handleClickAccredit = () => {
    accredit(id, pw);
  };

  const handleKeyDownAccredit = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      accredit(id, pw);
    }
  };

  return (
    <div>
      <S.Row>
        <Input
          type="text"
          name="id"
          placeholder="ID"
          onChange={handleChangeClientInfo}
          onKeyDown={() => {}}
          value={id}
        />
      </S.Row>
      <S.Row>
        <Input
          type="password"
          name="pw"
          placeholder="Password"
          onChange={handleChangeClientInfo}
          onKeyDown={handleKeyDownAccredit}
          value={pw}
        />
      </S.Row>
      <S.Row>
        <Button variant="long" type="button" onClick={handleClickAccredit} value={btnValue} />
      </S.Row>
    </div>
  );
};

export default AuthForm;
