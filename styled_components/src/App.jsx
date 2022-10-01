import React, { Component } from "react";
import { Container, Box } from "./AppStyle";
class App extends Component {
  render() {
    return (
      <Container>
        <Box>Large</Box>
        <Box>Medium</Box>
        <Box>Small</Box>
      </Container>
    );
  }
}

export default App;
