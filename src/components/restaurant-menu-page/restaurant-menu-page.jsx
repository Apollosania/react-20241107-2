import { useParams } from "react-router-dom";
import { FoodMenu } from "../food-menu/food-menu";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";
import { useRequest } from "../../redux/hooks/use-request.js";
import { getDishesByRestaurantId } from "../../redux/entities/dishes/get-dishes-by-restaurant-id.js";
import { RequestPreloader } from "../request-preloader/request-preloader.jsx";

export const RestaurantMenuPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const { setTitle } = useLayoutTitle();
  const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

  useEffect(() => {
    setTitle(`${restaurant.name} - Меню`);
  }, [setTitle, restaurant.name]);

  return (
    <RequestPreloader requestStatus={requestStatus}>
      <FoodMenu dishesIds={restaurant.menu} />
    </RequestPreloader>
  );
};
