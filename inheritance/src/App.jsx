import React, { Component } from "react";
import { Container, Button, ActiveButton, Rotate } from "./AppStyle";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Button>Click me</Button>
          <ActiveButton>Active button</ActiveButton>
        </Container>
        <Rotate>Rotate</Rotate>
      </div>
    );
  }
}

export default App;
