import styled, { css } from "styled-components";

export const Container = styled("div")`
  display: flex;
  gap: 20px;
  background-color: springgreen;
  border: 2px solid coral;
  padding: 20px;
`;

const common = css`
  height: fit-content;
  font-weight: 400;
  font-family: sans-serif;
  color: #222;
  border: 2px solid #222;
  padding: 5px;
  font-size: 28px;
`;

export const Title = styled.div`
  ${common};
`;

export const Desc = styled.div`
  ${common};
  font-size: 18px; // The last line of code will be applied
  color: ${({ left }) => (left ? "red" : "green")};
`;

function getSize(props) {
  switch (props.type) {
    case "large":
      return "200px";
    case "medium":
      return "150px";
    case "small":
      return "100px";
    default:
      return "150px";
  }
}

export const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${getSize};
  height: ${getSize};
  border: 5px solid violet;
  font-size: 22px;
  font-family: sans-serif;
`;
