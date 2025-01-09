import { DishContainer } from "../dish/dish-container";

export const DishPage = async ({ params }) => {
  const { dishId } = await params;

  return <DishContainer dishId={dishId} />;
};
