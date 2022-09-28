import React, { Component } from "react";
import { student } from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Webbrain",
      name: "Abdurakhmon",
      surname: "Otajonov",
      data: student,
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
    const onFilter = (event) => {
      let result = student.filter((value) =>
        value.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      // console.log(result);
      this.setState({ data: result });
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
        <hr />
        <input onChange={onFilter} type="text" placeholder="Filter by name" />
        {this.state.data.map((value) => {
          return (
            <h1 key={value.id}>
              {value.id}. {value.name} ({value.status})
            </h1>
          );
        })}
      </div>
    );
  }
}
export default App;
