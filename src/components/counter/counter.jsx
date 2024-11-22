export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <button type={"button"} onClick={increment}>
        +
      </button>
      {value}
      <button type={"button"} onClick={decrement}>
        -
      </button>
    </div>
  );
};
