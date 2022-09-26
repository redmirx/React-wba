import React, { Component } from "react";

class App extends Component {
  render() {
    // console.log(this.props?.data?.name);
    const { data } = this.props;
    return (
      <div>
        {/* <h1>
          Hello {this.props?.data?.name} {this.props?.surname || "unknown"}
        </h1> */}
        <h2>
          {data.id} {data.name}
        </h2>
      </div>
    );
  }
}

export default App;
