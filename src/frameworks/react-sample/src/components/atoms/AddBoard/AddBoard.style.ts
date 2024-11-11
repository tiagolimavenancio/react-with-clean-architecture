import styled from "styled-components";

export const Area = styled.div`
  &::after {
    content: "";
    clear: both;
    display: block;
  }
`;

export const Box = styled.div`
  float: left;
  margin-right: 10px;
  width: 200px;
`;

export const Wrapper = styled.div`
  float: left;
  margin-right: 10px;
  width: 80px;
`;
