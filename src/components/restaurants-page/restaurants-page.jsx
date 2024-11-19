import { restaurants } from "../../../materials/mock.js";
import { RestaurantsTabs } from "../restaurantsTabs/restaurantsTabs.jsx";
import { Layout } from "../layout/layout.jsx";

export const RestaurantsPage = () => {
  return (
    <Layout title={"Список ресторанов"}>
      {Array.isArray(restaurants) && restaurants.length > 0 && (
        <RestaurantsTabs restaurants={restaurants} />
      )}
    </Layout>
  );
};
