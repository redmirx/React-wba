import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  gap: 20px;
  background-color: springgreen;
  border: 2px solid coral;
  padding: 20px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 5px solid violet;
`;
