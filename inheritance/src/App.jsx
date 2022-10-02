import React, { Component } from "react";
import { Container, Button, ActiveButton } from "./AppStyle";

class App extends Component {
  render() {
    return (
      <Container>
        <Button>Click me</Button>
        <ActiveButton>Active button</ActiveButton>
      </Container>
    );
  }
}

export default App;
