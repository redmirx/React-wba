import React from 'react';
import { useState } from 'react';

const State = () => {
  const [count, setCount] = useState({ number: 0 });

  const handleCount = ({ target: { name } }) => {
    console.log(name);
    switch (name) {
      case 'plus':
        return setCount({ number: count.number + 1 });
      case 'minus':
        return setCount({ number: count.number - 1 });
      default:
        return count.name;
    }
  };

  return (
    <div>
      <h1>{count.number}</h1>
      <button name="plus" onClick={handleCount}>
        +
      </button>
      <button name="minus" onClick={handleCount}>
        -
      </button>
    </div>
  );
};

export default State;
