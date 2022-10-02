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
