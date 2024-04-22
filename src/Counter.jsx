import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);


  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    setCounter(isNaN(value) ? 0 : value);

  };

  const increment = () => {
    if (counter < 100) {
      setCounter(counter + 1);
    }
  };
// decrement
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
       <input
        type="number"
        value={counter}
        onChange={handleInputChange}
        placeholder="Enter initial value"
      />
      <button onClick={increment}>Increment(+)</button>
      <button onClick={decrement}>Decrement(-)</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
}

export default Counter;
