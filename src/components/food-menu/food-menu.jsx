import { Title } from "../typography/title";
import style from "./food-menu.module.css";
import { Dish } from "../dish/dish.jsx";

export const FoodMenu = ({ dishes }) => {
  return (
    <section>
      <Title level={3}>Меню</Title>

      <ul className={style.list}>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Dish {...dish} />
          </li>
        ))}
      </ul>
    </section>
  );
};
