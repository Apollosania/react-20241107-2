import { useParams } from "react-router-dom";
import { DishContainer } from "../dish/dish-container";
import { useSelector } from "react-redux";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice.js";

export const DishPage = () => {
  const { dishId } = useParams();
  const { name } = useSelector((state) => selectDishById(state, dishId));
  const { setTitle } = useLayoutTitle();

  useEffect(() => {
    setTitle(name);
  }, [setTitle, name]);

  return <DishContainer id={dishId} />;
};
