import React, { Component } from "react";
import { Container, Table } from "./style";
import { studentData } from "../../data";

export default class TableCom extends Component {
  state = {
    studentData,
  };
  render() {
    return (
      <Container>
        <Table border={2}>
          <Table.Thead>
            <Table.Trow>
              {Object.keys(this.state.studentData[0]).map((value) => {
                return <Table.Theading key={value}>{value}</Table.Theading>;
              })}
            </Table.Trow>
          </Table.Thead>
          <Table.Tbody>
            {this.state.studentData.map((student) => {
              return (
                <Table.Trow key={student.id}>
                  <Table.Tdata>{Math.trunc(student.id)}</Table.Tdata>
                  <Table.Tdata>{student.fullName}</Table.Tdata>
                  <Table.Tdata>{student.phoneNumber}</Table.Tdata>
                  <Table.Tdata>{student.status}</Table.Tdata>
                  <Table.Tdata>
                    <button
                      onClick={() => {
                        const result = this.state.studentData.filter(
                          (value) => value.id !== student.id
                        );
                        this.setState({ studentData: result });
                      }}
                    >
                      Delete
                    </button>
                  </Table.Tdata>
                </Table.Trow>
              );
            })}
          </Table.Tbody>
        </Table>
      </Container>
    );
  }
}
