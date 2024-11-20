import { restaurants } from "../materials/mock.js";
import { RestaurantsTabs } from "./components/restaurantsTabs/restaurantsTabs.jsx";
import { Layout } from "./components/layout/layout.jsx";

export const App = () => {
  return (
    <Layout title={"Список ресторанов"}>
      {Array.isArray(restaurants) && restaurants.length > 0 && (
        <RestaurantsTabs restaurants={restaurants} />
      )}
    </Layout>
  );
};
