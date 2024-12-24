import { useParams } from "react-router-dom";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";
import { useRequest } from "../../redux/hooks/use-request.js";
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id.js";
import { RequestPreloader } from "../request-preloader/request-preloader.jsx";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const requestStatus = useRequest(getRestaurantById, restaurantId);
  const { setTitle } = useLayoutTitle();

  useEffect(() => {
    if (restaurant) {
      setTitle(restaurant.name);
    }
  }, [setTitle, restaurant?.name]);

  if (!restaurant) {
    return;
  }

  return (
    <RequestPreloader requestStatus={requestStatus}>
      <RestaurantContainer id={restaurantId} />
    </RequestPreloader>
  );
};
