import { useParams } from "react-router-dom";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";
import { useGetRestaurantByIdQuery } from "../../redux/services/api/index.js";
import { QueryPreloader } from "../query-preloader/query-preloader";
import { Restaurant } from "../restaurant/restaurant.jsx";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const { setTitle } = useLayoutTitle();
  const {
    data: restaurant,
    isFetching,
    isError,
  } = useGetRestaurantByIdQuery(restaurantId);

  useEffect(() => {
    if (restaurant) {
      setTitle(restaurant.name);
    }
  }, [setTitle, restaurant?.name]);

  if (!restaurant) {
    return;
  }

  return (
    <QueryPreloader {...{ isFetching, isError }}>
      <Restaurant {...restaurant} />
    </QueryPreloader>
  );
};
