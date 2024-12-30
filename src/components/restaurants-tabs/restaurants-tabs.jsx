"use client";

import { NavTab } from "../nav-tab/nav-tab.jsx";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";

export const RestaurantsTabs = ({ restaurants }) => {
  const { setTitle } = useLayoutTitle();

  useEffect(() => {
    setTitle("Список ресторанов");
  }, [setTitle]);

  return restaurants?.map((restaurant) => (
    <NavTab
      key={restaurant.id}
      title={restaurant.name}
      to={`/restaurants/${restaurant.id}`}
    />
  ));
};
