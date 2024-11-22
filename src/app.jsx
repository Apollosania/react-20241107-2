import { restaurants } from "../materials/mock.js";
import { RestaurantsTabs } from "./components/restaurantsTabs/restaurantsTabs.jsx";
import { Layout } from "./components/layout/layout.jsx";
import { ReviewForm } from "./components/review-form/review-form";

export const App = () => {
  return (
    <Layout title={"Список ресторанов"}>
      {Array.isArray(restaurants) && restaurants.length > 0 && (
        <RestaurantsTabs restaurants={restaurants} />
      )}

      <ReviewForm />
    </Layout>
  );
};
