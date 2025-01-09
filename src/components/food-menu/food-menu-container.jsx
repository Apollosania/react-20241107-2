"use client";

import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";
import {
  useGetDishesByRestaurantIdQuery,
  useGetRestaurantByIdQuery,
} from "../../redux/services/api/index.js";
import { QueryPreloader } from "../query-preloader/query-preloader";
import { FoodMenu } from "./food-menu.jsx";

export const FoodMenuContainer = ({ restaurantId }) => {
  const { setTitle } = useLayoutTitle();
  const {
    data: dishes,
    isFetching: isGetDishesFetching,
    isError: isGetDishesError,
  } = useGetDishesByRestaurantIdQuery(restaurantId);
  const {
    data: restaurant,
    isFetching: isGetRestaurantFetching,
    isError: isGetRestaurantError,
  } = useGetRestaurantByIdQuery(restaurantId);

  useEffect(() => {
    if (restaurant) {
      setTitle(`${restaurant.name} - Меню`);
    }
  }, [setTitle, restaurant?.name]);

  return (
    <QueryPreloader
      isFetching={isGetDishesFetching || isGetRestaurantFetching}
      isError={isGetDishesError || isGetRestaurantError}
    >
      <FoodMenu dishes={dishes} />
    </QueryPreloader>
  );
};
