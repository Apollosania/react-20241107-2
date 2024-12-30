import { getRestaurants } from "../../services/get-restaurants.js";
import { RestaurantsTabs } from "../restaurants-tabs/restaurants-tabs";

export const RestaurantsContainer = async () => {
  const restaurants = await getRestaurants();

  return <RestaurantsTabs restaurants={restaurants} />;
};
