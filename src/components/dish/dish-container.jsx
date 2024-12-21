import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice.js";
import { Dish } from "./dish";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return;
  }

  return <Dish {...dish} />;
};
