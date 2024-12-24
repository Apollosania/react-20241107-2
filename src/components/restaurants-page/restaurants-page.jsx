import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice.js";
import { RestaurantTabContainer } from "../restaurant-tab-container/restaurant-tab-container";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { Outlet } from "react-router-dom";
import { useRequest } from "../../redux/hooks/use-request.js";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants.js";
import { RequestPreloader } from "../request-preloader/request-preloader.jsx";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const { setTitle } = useLayoutTitle();
  const requestStatus = useRequest(getRestaurants);

  useEffect(() => {
    setTitle("Список ресторанов");
  }, [setTitle]);

  return (
    <RequestPreloader requestStatus={requestStatus}>
      {restaurantsIds?.map((id) => (
        <RestaurantTabContainer key={id} id={id} />
      ))}

      <Outlet />
    </RequestPreloader>
  );
};
