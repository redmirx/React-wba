import styled, { css, keyframes } from "styled-components";

export const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
 from{
  transform: rotate(0deg);
 } 
 to{
  transform: rotate(360deg);
 }
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
  font-family: sans-serif;
  font-size: 14px;
  :active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;

export const ActiveButton = styled(Button)``;

export const Rotate = styled.div`
  width: 100px;
  height: 100px;
  background-color: #444;
  margin: 20px auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 2px solid springgreen;
  :hover {
    animation: ${rotate} 2s infinite linear;
  }
  :active {
    background-color: springgreen;
    border-color: #444;
    color: #444;
    box-shadow: 0 0 20px 3px #222;
  }
  cursor: pointer;
`;
