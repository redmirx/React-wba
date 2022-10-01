import React, { Component } from "react";
import { Container, Box } from "./AppStyle";
class App extends Component {
  render() {
    return (
      <Container>
        <Box type="large">Large</Box>
        <Box type="medium">Medium</Box>
        <Box type="small">Small</Box>
      </Container>
    );
  }
}

export default App;
