import { Title } from "../typography/title";
import style from "./food-menu.module.css";
import { DishContainer } from "../dish/dish-container";

export const FoodMenu = ({ dishesIds }) => {
  return (
    <section>
      <Title level={3}>Меню</Title>

      <ul className={style.list}>
        {dishesIds.map((id) => (
          <li key={id}>
            <DishContainer id={id} />
          </li>
        ))}
      </ul>
    </section>
  );
};
