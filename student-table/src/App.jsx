import React, { Component } from "react";
import TableCom from "./Components/Table";
import { Center } from "./Components/Table/style";

class App extends Component {
  render() {
    return (
      <Center
        style={{
          margin: 100,
        }}
      >
        <TableCom />
      </Center>
    );
  }
}

export default App;
