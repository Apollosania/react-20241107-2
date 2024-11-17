import { Restaurants } from "./components/restaurants/restaurants";
import { restaurants } from "../materials/mock.js";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page.jsx";

export const App = () => {
  return (
    <RestaurantsPage>
      {Array.isArray(restaurants) && restaurants.length > 0 && (
        <Restaurants restaurants={restaurants} />
      )}
    </RestaurantsPage>
  );
};
