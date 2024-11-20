import { FoodMenuItem } from "../food-menu-item/food-menu-item.jsx";

export const FoodMenu = ({ foodMenu }) => {
  return (
    <section>
      <h3>Меню</h3>

      <ul>
        {foodMenu.map((food) => (
          <li key={food.id}>
            <FoodMenuItem {...food} />
          </li>
        ))}
      </ul>
    </section>
  );
};
