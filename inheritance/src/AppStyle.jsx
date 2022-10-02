import styled, { css } from "styled-components";

export const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #222;
  ${Center}
  gap: 20px;
  padding: 20px;
`;

export const Button = styled.div`
  ${Center}
  width: 100px;
  height: 30px;
  background-color: #ef476f;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  :active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;

export const ActiveButton = styled(Button)``;
