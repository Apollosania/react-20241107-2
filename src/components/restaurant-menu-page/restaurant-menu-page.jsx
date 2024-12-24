import { useParams } from "react-router-dom";
import { FoodMenu } from "../food-menu/food-menu";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";

export const RestaurantMenuPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const { setTitle } = useLayoutTitle();

  useEffect(() => {
    setTitle(`${restaurant.name} - Меню`);
  }, [setTitle, restaurant.name]);

  return <FoodMenu dishesIds={restaurant.menu} />;
};
