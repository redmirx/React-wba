import React, { useReducer, useState } from 'react';

const Reducer = () => {
  const onSelect = ({ target: { value } }) => {
    console.log(value);
    setAmount(value);
  };

  const [amount, setAmount] = useState(0);

  const [counter, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'plus':
        return state + 1;
      case 'minus':
        return state - 1;
      case 'byAmount':
        return state + Number(action.payload);
      default:
        return state;
    }
  }, 0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: 'plus' })}>+</button>
      <button onClick={() => dispatch({ type: 'minus' })}>-</button>
      <select onChange={onSelect} name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={() => dispatch({ type: 'byAmount', payload: amount })}>
        {amount}
      </button>
    </div>
  );
};

export default Reducer;
