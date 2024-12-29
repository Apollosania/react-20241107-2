import { useParams } from "react-router-dom";
import { DishContainer } from "../dish/dish-container";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";
import { useGetDishByIdQuery } from "../../redux/services/api/index.js";
import { QueryPreloader } from "../query-preloader/query-preloader.jsx";

export const DishPage = () => {
  const { dishId } = useParams();
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
      <DishContainer id={dishId} />
    </QueryPreloader>
  );
};
