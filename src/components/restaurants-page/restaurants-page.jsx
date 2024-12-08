import { useState } from "react";
import { restaurants } from "../../../materials/mock.js";
import { Tab } from "../tabs/tabs.jsx";
import { Restaurant } from "../restaurant/restaurant.jsx";

export const RestaurantsPage = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0].id,
  );

  const currentRestaurant = restaurants.find(
    ({ id }) => id === currentRestaurantId,
  );

  return (
    <>
      {restaurants?.map(({ name, id }) => (
        <Tab
          key={id}
          title={name}
          onClick={() => setCurrentRestaurantId(id)}
          isActive={id === currentRestaurantId}
        />
      ))}

      {Boolean(currentRestaurant) && <Restaurant {...currentRestaurant} />}
    </>
  );
};
