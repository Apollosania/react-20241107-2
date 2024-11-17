import { Counter } from "../counter/counter";

export const FoodMenu = ({ foodMenu }) => {
  return (
    <section>
      <h3>Меню</h3>

      <ul>
        {foodMenu.map((food) => (
          <li key={food.id}>
            {Boolean(food.name) && (
              <p>
                <b>Название блюда:</b> {food.name}
              </p>
            )}
            {Boolean(food.price) && (
              <p>
                <b>Цена:</b> {food.price}
              </p>
            )}
            {Array.isArray(food.ingredients) && food.ingredients.length > 0 && (
              <p>
                <b>Состав:</b> {food.ingredients.join(", ")}
              </p>
            )}

            <Counter />
          </li>
        ))}
      </ul>
    </section>
  );
};
