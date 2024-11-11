import styled from "styled-components";

const variantStyle = (variant = "long") => {
  switch (variant) {
    case "short":
      return {
        padding: "0 20px",
        lineHeight: "34px",
        fontSize: "14px",
        borderRadius: "4px",
      };

    default:
      return {};
  }
};

type StyledButtonProps = {
  variant: "long" | "short";
};

export const Button = styled.button<StyledButtonProps>(({ variant }) => ({
  display: "inline-block",
  height: "60px",
  width: "100%",
  fontSize: "18px",
  border: "1px solid #26b49e",
  background: "#33c1ab",
  color: "#fff",
  cursor: "pointer",
  textShadow: "0px 0px 1px #1d9b88",

  ...variantStyle(variant),
}));
