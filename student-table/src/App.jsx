import React, { Component } from "react";
import TableCom from "./Components/Table";

class App extends Component {
  render() {
    return (
      <div
        style={{
          margin: 100,
          border: "2px solid springgreen",
          // width: "fit-content",
        }}
      >
        <TableCom />
      </div>
    );
  }
}

export default App;
