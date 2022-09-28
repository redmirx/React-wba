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
    const onDelete = (id) => {
      console.log(id);
      let result = this.state.data.filter((value) => value.id !== id);
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
        <center>
          <input onChange={onFilter} type="text" placeholder="Filter by name" />
          <table border={1} width="50%">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.length ? (
                this.state.data.map((value) => {
                  return (
                    <tr key={value.id}>
                      <td>{value.id}</td>
                      <td>{value.name}</td>
                      <td>{value.status}</td>
                      <td>
                        <button onClick={() => onDelete(value.id)}>
                          Delete
                        </button>
                      </td>
                      <td>
                        <button>Edit</button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <th colSpan={5}>No data</th>
                </tr>
              )}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}

export default App;
