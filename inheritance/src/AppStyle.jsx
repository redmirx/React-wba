import styled, { css } from "styled-components";

export const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: yellow;
  ${Center}
`;

export const Button = styled.div`
  ${Center}
  width: 100px;
  height: 30px;
  background-color: coral;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
