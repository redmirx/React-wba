import React from "react";
import "./style.css";
import Card from "./Card";

///////////////////////////////////////////////////////////////////

import apple from "./assets/images/apple.jpg";
import banana from "./assets/images/banana.jpg";
import cherry from "./assets/images/cherry.jpg";
import grape from "./assets/images/grape.jpg";
import kumquat from "./assets/images/kumquat.jpg";
import lemon from "./assets/images/lemon.jpg";
import mango from "./assets/images/mango.jpg";
import orange from "./assets/images/orange.jpg";
import peach from "./assets/images/peach.jpg";
import pear from "./assets/images/pear.jpg";
import strawberry from "./assets/images/strawberry.jpg";
import watermelon from "./assets/images/watermelon.jpg";

const fruits_data = [
  { fruitImg: apple, fruitName: "Apple" },
  { fruitImg: banana, fruitName: "Banana" },
  { fruitImg: cherry, fruitName: "Cherry" },
  { fruitImg: grape, fruitName: "Grape" },
  { fruitImg: kumquat, fruitName: "Kumquat" },
  { fruitImg: lemon, fruitName: "Lemon" },
  { fruitImg: mango, fruitName: "Mango" },
  { fruitImg: orange, fruitName: "Orange" },
  { fruitImg: peach, fruitName: "Peach" },
  { fruitImg: pear, fruitName: "Pear" },
  { fruitImg: strawberry, fruitName: "Strawberry" },
  { fruitImg: watermelon, fruitName: "Watermelon" },
];

////////////////////////////////////////////////////////////////////

class Fruits extends React.Component {
  render() {
    return (
      <div className="container">
        {fruits_data.map((value) => {
          return <Card data={value}></Card>;
        })}
      </div>
    );
  }
}

export default Fruits;
