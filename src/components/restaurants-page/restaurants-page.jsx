import { Suspense } from "react";
import { RestaurantsContainer } from "./restaurants-container";

export const RestaurantsPage = ({ children }) => {
  return (
    <Suspense fallback={"Загрузка..."}>
      <RestaurantsContainer />

      {children}
    </Suspense>
  );
};
