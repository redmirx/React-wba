import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Webbrain",
      name: "Abdurakhmon",
      surname: "Otajonov",
    };
  }
  render() {
    const onChangeTitle = (event) => {
      this.setState({ title: event?.target?.value });
      console.log(event.target.value);
    };
    const onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
      // console.log(event.target.name);
    };

    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1>Name : {this.state.name}</h1>
        <h1>Surname : {this.state.surname}</h1>
        <input
          onChange={(event) => onChangeTitle(event)}
          type="text"
          placeholder="Change the title"
        />
        <br />
        <input
          name="name"
          onChange={onChange}
          type="text"
          placeholder="Change the name"
        />
        <br />
        <input
          name="surname"
          onChange={onChange}
          type="text"
          placeholder="Change the surname"
        />
      </div>
    );
  }
}

export default App;
