import { useParams } from "react-router-dom";
import { FoodMenu } from "../food-menu/food-menu";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";
import {
  useGetDishesByRestaurantIdQuery,
  useGetRestaurantByIdQuery,
} from "../../redux/services/api/index.js";
import { QueryPreloader } from "../query-preloader/query-preloader";

export const RestaurantMenuPage = () => {
  const { restaurantId } = useParams();
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
    setTitle(`${restaurant.name} - Меню`);
  }, [setTitle, restaurant.name]);

  return (
    <QueryPreloader
      {...{
        isFetching: isGetDishesFetching || isGetRestaurantFetching,
        isError: isGetDishesError || isGetRestaurantError,
      }}
    >
      <FoodMenu dishes={dishes} />
    </QueryPreloader>
  );
};
