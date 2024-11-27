import { FoodMenuItem } from "../food-menu-item/food-menu-item.jsx";
import { Title } from "../typography/title";

import style from "./food-menu.module.css";

export const FoodMenu = ({ foodMenu }) => {
  return (
    <section>
      <Title level={3}>Меню</Title>

      <ul className={style.list}>
        {foodMenu.map((food) => (
          <li key={food.id}>
            <FoodMenuItem {...food} />
          </li>
        ))}
      </ul>
    </section>
  );
};
