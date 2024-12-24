import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice.js";
import { DishCounter } from "../dish-counter/dish-counter";

export const CartItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return (
    <div>
      <p>
        <b>Блюдо:</b> {dish.name}
      </p>
      <DishCounter id={id} />
    </div>
  );
};
