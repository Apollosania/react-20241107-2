import { FoodMenuContainer } from "../food-menu/food-menu-container";

export const RestaurantMenuPage = async ({ params }) => {
  const { restaurantId } = await params;

  return <FoodMenuContainer restaurantId={restaurantId} />;
};
