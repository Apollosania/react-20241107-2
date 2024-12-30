import { FoodMenu } from "./food-menu.jsx";
import { getDishesByRestaurantId } from "../../services/get-dishes-by-restaurant-id.js";
import { getRestaurantById } from "../../services/get-restaurant-by-id.js";

export const FoodMenuContainer = async ({ restaurantId }) => {
  const dishes = await getDishesByRestaurantId(restaurantId);
  const restaurant = await getRestaurantById(restaurantId);

  return <FoodMenu dishes={dishes} pageTitle={restaurant?.name} />;
};
