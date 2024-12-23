import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice.js";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { RestaurantTabContainer } from "../restaurant-tab-container/restaurant-tab-container";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurantsIds[0],
  );

  return (
    <>
      {restaurantsIds?.map((id) => (
        <RestaurantTabContainer
          key={id}
          id={id}
          onClick={() => setCurrentRestaurantId(id)}
          isActive={id === currentRestaurantId}
        />
      ))}

      {Boolean(currentRestaurantId) && (
        <RestaurantContainer
          id={currentRestaurantId}
          key={currentRestaurantId}
        />
      )}
    </>
  );
};
