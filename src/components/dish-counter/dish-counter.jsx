import { Counter } from "../counter/counter.jsx";
import { useReducer } from "react";

const INITIAL_STATE = {
  count: 0,
};

const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";

const reducer = (state, { type }) => {
  switch (type) {
    case INCREMENT_COUNT:
      return { ...state, count: Math.min(state.count + 1, 5) };
    case DECREMENT_COUNT:
      return { ...state, count: Math.max(state.count - 1, 1) };
  }
};

export const DishCounter = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Counter
      value={state.count}
      increment={() => dispatch({ type: INCREMENT_COUNT })}
      decrement={() => dispatch({ type: DECREMENT_COUNT })}
    />
  );
};
