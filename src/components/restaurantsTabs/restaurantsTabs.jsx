import { useState } from "react";
import style from "./style.module.css";
import { Restaurant } from "../restaurant/restaurant";

export const RestaurantsTabs = ({ restaurants }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  const currentRestaurant = restaurants.find(
    (restaurant, index) => index === activeRestaurantIndex,
  );

  return (
    <>
      {restaurants.map((restaurant, index) => (
        <button
          type={"button"}
          key={restaurant.id}
          className={`${style["tab-button"]} ${index === activeRestaurantIndex ? style["tab-button--active"] : ""}`}
          onClick={() =>
            index !== activeRestaurantIndex && setActiveRestaurantIndex(index)
          }
        >
          {restaurant.name}
        </button>
      ))}

      {Boolean(currentRestaurant) && <Restaurant {...currentRestaurant} />}
      {Boolean(currentRestaurant) && <Restaurant {...currentRestaurant} />}
      {Boolean(currentRestaurant) && <Restaurant {...currentRestaurant} />}
      {Boolean(currentRestaurant) && <Restaurant {...currentRestaurant} />}
      {Boolean(currentRestaurant) && <Restaurant {...currentRestaurant} />}
    </>
  );
};
