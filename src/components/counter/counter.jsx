import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => {
      const newValue = prevState + 1;

      return newValue > 5 ? 5 : newValue;
    });
  };

  const decrement = () => {
    setCount((prevState) => {
      const newValue = prevState - 1;

      return newValue < 0 ? 0 : newValue;
    });
  };

  return (
    <div>
      <button type={"button"} onClick={increment}>
        +
      </button>
      {count}
      <button type={"button"} onClick={decrement}>
        -
      </button>
    </div>
  );
};
