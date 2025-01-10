import { Dish } from "./dish";
import { getDishById } from "../../services/get-dish-by-id.js";

export const DishContainer = async ({ dishId }) => {
  const dish = await getDishById(dishId);

  if (!dish) {
    return;
  }

  return <Dish {...dish} />;
};
