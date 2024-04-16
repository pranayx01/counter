import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 100) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={increment}>Increment(+)</button>
      <button onClick={decrement}>Decrement(-)</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
}

export default Counter;
