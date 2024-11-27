import { Button } from "../button/button";
import { Text } from "../typography/text";

import style from "./counter.module.css";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div className={style.wrapper}>
      <Button type={"secondary"} onClick={increment}>
        +
      </Button>

      <div className={style.value}>
        <Text>{value}</Text>
      </div>

      <Button type={"secondary"} onClick={decrement}>
        -
      </Button>
    </div>
  );
};
