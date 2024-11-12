import * as S from "./Button.style";

type ButtonProps = {
  variant: "long" | "short";
  type: "button" | "submit" | "reset";
  value: string;
  onClick(): void;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { variant, type, value, onClick } = props;

  return (
    <S.Button variant={variant} className={"button"} type={type} onClick={onClick}>
      {value}
    </S.Button>
  );
};

export { Button };
