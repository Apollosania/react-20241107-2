import { useParams } from "react-router-dom";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const { setTitle } = useLayoutTitle();

  useEffect(() => {
    setTitle(restaurant.name);
  }, [setTitle, restaurant.name]);

  if (!restaurant) {
    return;
  }

  return <RestaurantContainer id={restaurantId} />;
};
