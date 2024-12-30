import { DishContainer } from "../dish/dish-container";
import { Suspense } from "react";

export const DishPage = async ({ params }) => {
  const { dishId } = await params;

  return (
    <Suspense fallback={"Загрузка..."}>
      <DishContainer dishId={dishId} />
    </Suspense>
  );
};
