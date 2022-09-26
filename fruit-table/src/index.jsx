import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
import Fruit from "./App";
import Fruits_img from "./imgData";
import reportWebVitals from "./reportWebVitals";
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

const Fruits = [
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      {Fruits.map((value) => {
        return <Fruit data={value}></Fruit>;
      })}
    </div>
  </React.StrictMode>
);
reportWebVitals();
