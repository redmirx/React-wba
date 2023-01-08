import React, { useState, useReducer } from "react";

export default function Hooks() {
  const [count, setCount] = useState(0);

  const [data, dispatch] = useReducer(
    (state, payload) => {
      console.log(state, payload);
      switch (payload.type) {
        case "plus":
          return { count: state.count + 1 };
        case "minus":
          return { count: state.count - 1 };
        case "byAmount":
          return { count: state.count + count };
        default:
          return state.count;
      }
      // return state;
    },
    { count: 1 }
  );
  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setCount(Number(event.target.value));
  };
  return (
    <div>
      {/* <h1>State {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}
      <hr />
      <h1>Reducer {data.count}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "byAmount" })}>{count}</button>
      <select name="" id="" onChange={amountChangeHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}
