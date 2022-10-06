import styled, { css } from "styled-components";

export const Container = styled.div`
  font-size: 24px;
  overflow: scroll;
  width: 600px;
  height: 400px;
  position: relative;
`;

export const Table = styled.table`
  width: 1200px;
  border-collapse: collapse;
  color: #ccc5b9;
  font-family: sans-serif;
  font-weight: 300;
`;
Table.Thead = styled.thead`
  position: sticky;
  top: -2px;
  z-index: ${({ sticky }) => sticky && 999};
  background-color: #111;
`;
Table.Tbody = styled.tbody``;
Table.Trow = styled.tr``;

Table.Theading = styled.th`
  border: 2px solid #1b263b;
  padding: 5px;
  position: sticky;
  left: ${({ sticky }) => sticky && "-2px"};
  right: ${({ right }) => right && "-2px"};
  z-index: ${({ sticky }) => sticky && 999};
  /* background-color: #111; */
  background-color: ${({ sticky }) => sticky && "yellow"};
  background-color: ${({ right }) => right && "red"};
`;
Table.Tdata = styled.td`
  border: 2px solid #1b263b;
  padding: 5px;
  position: sticky;
  top: -2px;
  left: ${({ sticky }) => sticky && "-2px"};
  right: ${({ right }) => right && "-2px"};
  z-index: ${({ sticky }) => sticky && 998};
  background-color: #111;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
