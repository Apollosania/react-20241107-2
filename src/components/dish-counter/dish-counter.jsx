import { Counter } from "../counter/counter.jsx";
import { useState } from "react";

export const DishCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <Counter
      value={count}
      increment={() =>
        setCount((currentCount) => Math.min(currentCount + 1, 5))
      }
      decrement={() =>
        setCount((currentCount) => Math.max(currentCount - 1, 5))
      }
    />
  );
};
