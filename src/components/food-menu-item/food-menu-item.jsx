import { DishCounter } from "../dish-counter/dish-counter";
import { Text } from "../typography/text";

import style from "./food-menu-item.module.css";
import { Title } from "../typography/title";

export const FoodMenuItem = ({ name, price, ingredients }) => {
  if (!name || !price) {
    return null;
  }

  return (
    <article className={style.wrapper}>
      <Title level={4} className={style.title}>
        {name}
      </Title>

      <p>
        <Text>
          <b>Цена:</b> {price}
        </Text>
      </p>

      {Array.isArray(ingredients) && ingredients.length > 0 && (
        <p>
          <Text>
            <b>Состав:</b> {ingredients.join(", ")}
          </Text>
        </p>
      )}

      <DishCounter />
    </article>
  );
};
