import React, { Component } from "react";
import { Container, Title, Box, Desc } from "./AppStyle";
class App extends Component {
  render() {
    return (
      <Container>
        <Box bgColor="coral" type="large">
          Large
        </Box>
        <Box bgColor="yellow" type="medium">
          Medium
        </Box>
        <Box bgColor="white" type="small">
          Small
        </Box>
        <Title>Hey there</Title>
        <Desc left>Description 1</Desc>
        <Desc>Description 2</Desc>
      </Container>
    );
  }
}

export default App;
