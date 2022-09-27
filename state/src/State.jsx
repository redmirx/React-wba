import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    const plus = () => {};
    const minus = () => {};
    return (
      <div>
        <h1>State {this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    );
  }
}

export default State;
