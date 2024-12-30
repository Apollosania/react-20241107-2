"use client";

import { Dish } from "./dish";
import { useEffect } from "react";
import { useGetDishByIdQuery } from "../../redux/services/api/index.js";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { QueryPreloader } from "../query-preloader/query-preloader.jsx";

export const DishContainer = ({ dishId }) => {
  const { data: dish, isFetching, isError } = useGetDishByIdQuery(dishId);
  const { setTitle } = useLayoutTitle();

  useEffect(() => {
    if (dish) {
      setTitle(dish.name);
    }
  }, [setTitle, dish?.name]);

  if (!dish) {
    return;
  }

  return (
    <QueryPreloader {...{ isFetching, isError }}>
      <Dish {...dish} />
    </QueryPreloader>
  );
};
