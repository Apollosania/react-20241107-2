"use client";

import { Restaurant } from "./restaurant";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useGetRestaurantByIdQuery } from "../../redux/services/api/index.js";
import { useEffect } from "react";
import { QueryPreloader } from "../query-preloader/query-preloader.jsx";

export const RestaurantContainer = ({ restaurantId }) => {
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
