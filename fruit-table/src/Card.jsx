import React, { Component } from "react";
import "./style.css";

class Card extends Component {
  render() {
    return (
      <div className="box">
        <div className="img-box">
          <img src={this.props.data.fruitImg} alt="" width="100%" />
        </div>
        <p className="fruit-name">{this.props.data.fruitName}</p>
      </div>
    );
  }
}

export default Card;
