import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  gap: 20px;
  background-color: springgreen;
  border: 2px solid coral;
  padding: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${getSize};
  height: ${getSize};
  border: 5px solid violet;
`;
