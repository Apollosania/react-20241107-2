"use client";

import { useEffect } from "react";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useGetRestaurantsQuery } from "../../redux/services/api/index.js";
import { QueryPreloader } from "../query-preloader/query-preloader";
import { NavTab } from "../nav-tab/nav-tab.jsx";

export const RestaurantsPage = ({ children }) => {
  const { setTitle } = useLayoutTitle();
  const { data: restaurants, isFetching, isError } = useGetRestaurantsQuery();

  useEffect(() => {
    setTitle("Список ресторанов");
  }, [setTitle]);

  return (
    <QueryPreloader {...{ isFetching, isError }}>
      {restaurants?.map((restaurant) => (
        <NavTab
          key={restaurant.id}
          title={restaurant.name}
          to={`/restaurants/${restaurant.id}`}
        />
      ))}

      {children}
    </QueryPreloader>
  );
};
