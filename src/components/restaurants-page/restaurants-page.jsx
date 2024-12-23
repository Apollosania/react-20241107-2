import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice.js";
import { RestaurantTabContainer } from "../restaurant-tab-container/restaurant-tab-container";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { Outlet } from "react-router-dom";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const { setTitle } = useLayoutTitle();

  useEffect(() => {
    setTitle("Список ресторанов");
  }, [setTitle]);

  return (
    <>
      {restaurantsIds?.map((id) => (
        <RestaurantTabContainer key={id} id={id} />
      ))}

      <Outlet />
    </>
  );
};
