import React, { Component } from "react";
import { Container, Table, Center } from "./style";
import { studentData } from "../../data";
import "./style.css";

export default class TableCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: studentData,
      name: "",
      phone: "",
      status: "",
    };
  }
  // state = {
  //   studentData,
  // };

  render() {
    return (
      <Container>
        <Table>
          <Table.Thead sticky>
            <Table.Trow>
              {Object.keys(this.state.data[0]).map((value) => {
                return (
                  <Table.Theading
                    key={value}
                    sticky={value === "id" ? true : false}
                  >
                    {value}
                  </Table.Theading>
                );
              })}
              <Table.Theading right>delete</Table.Theading>
            </Table.Trow>
          </Table.Thead>
          <Table.Tbody>
            {this.state.data.map((student) => {
              return (
                <Table.Trow key={student.id}>
                  <Table.Tdata sticky>{Math.trunc(student.id)}</Table.Tdata>
                  <Table.Tdata>{student.fullName}</Table.Tdata>
                  <Table.Tdata>{student.phoneNumber}</Table.Tdata>
                  <Table.Tdata>{student.status}</Table.Tdata>
                  <Table.Tdata right>
                    <Center>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="icon-del"
                        onClick={() => {
                          const result = this.state.data.filter(
                            (value) => value.id !== student.id
                          );
                          this.setState({ data: result });
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </Center>
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
