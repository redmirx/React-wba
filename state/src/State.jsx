import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, title: "Hello World" };
  }
  render() {
    const plus = () => {
      this.setState({
        count: this.state.count < 10 ? this.state.count + 1 : this.state.count,
      });
    };
    const minus = () => {
      this.setState({
        count: this.state.count > 0 ? this.state.count - 1 : this.state.count,
      });
    };
    const onChange = (event) => {
      console.log(event.target.value);
      this.setState({ title: event.target.value });
    };
    const onSelect = (event) => {
      console.log(event.target.value);
    };
    const onCheck = (event) => {
      console.log(event.target.checked);
    };
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1>State {this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <h1>Input</h1>
        <input onChange={onChange} type="text" placeholder="Enter some text" />
        <h1>Select</h1>
        <select onChange={onSelect} name="" id="">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <h1>Checkbox</h1>
        <input onChange={onCheck} type="checkbox" />
      </div>
    );
  }
}

export default State;
