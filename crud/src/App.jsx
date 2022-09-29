import React, { Component } from "react";
import { student } from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "CRUD Application",
      name: "",
      status: "",
      data: student,
      search: "id",
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
        `${value[this.state.search]}`
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      // console.log(result);
      this.setState({ data: result });
    };
    const onDelete = (id) => {
      console.log(id);
      let result = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: result });
    };

    const onAdd = () => {
      let user = {
        id: this.state.data.length + 1,
        name: this.state.name,
        status: this.state.status,
      };
      console.log(user);
      this.state.name && this.state.status !== ""
        ? this.setState({
            data: [...this.state.data, user],
            name: "",
            status: "",
          })
        : alert("Please fill out the field");
    };
    const onSelect = (event) => {
      console.log(event.target.value);
      this.setState({ search: event.target.value });
    };
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1>Name : {this.state.name}</h1>
        <h1>Status : {this.state.status}</h1>
        <input
          onChange={(event) => onChangeTitle(event)}
          type="text"
          placeholder="Change the title"
        />
        <hr></hr>
        <input
          value={this.state.name}
          name="name"
          onChange={onChange}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          value={this.state.status}
          name="status"
          onChange={onChange}
          type="text"
          placeholder="Status"
        />
        <br />
        <button onClick={onAdd}>Add</button>
        <hr />
        <center>
          <select onChange={onSelect} name="" id="">
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="status">Status</option>
          </select>
          <input onChange={onFilter} type="text" placeholder="Serch" />
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
