import { DishCounter } from "../dish-counter/dish-counter";

export const FoodMenuItem = ({ name, price, ingredients }) => {
  if (!name || !price) {
    return null;
  }

  return (
    <div>
      <p>
        <b>Название блюда:</b> {name}
      </p>

      <p>
        <b>Цена:</b> {price}
      </p>

      {Array.isArray(ingredients) && ingredients.length > 0 && (
        <p>
          <b>Состав:</b> {ingredients.join(", ")}
        </p>
      )}

      <DishCounter />
    </div>
  );
};
