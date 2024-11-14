import styled from "styled-components";

export const Header = styled.section`
  width: 100%;
  height: 70px;
  padding: 17px 30px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.08);

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const Logo = styled.h1`
  float: left;
  margin: 0;
  line-height: 40px;
  font-size: 16px;
  font-weight: 500;
`;

export const BtnArea = styled.div`
  float: right;
`;
