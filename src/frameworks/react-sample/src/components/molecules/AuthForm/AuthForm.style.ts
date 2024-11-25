import styled from "styled-components";

export const Container = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

export const Row = styled.div(() => ({
  display: "flex",
  flex: 1,
  margin: "10px 0",
  width: "100%",
}));
