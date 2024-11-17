import { FoodMenu } from "../food-menu/food-menu";
import { Reviews } from "../reviews/reviews";
import { useState } from "react";
import style from "./style.module.css";

export const Restaurants = ({ restaurants }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

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
      {restaurants.map((restaurant, index) => (
        <article
          key={restaurant.id}
          className={`${style.restaurant} ${activeRestaurantIndex === index ? style["restaurant--active"] : ""}`}
        >
          <h2>{restaurant.name}</h2>

          {Array.isArray(restaurant.menu) && restaurant.menu.length > 0 && (
            <FoodMenu foodMenu={restaurant.menu} />
          )}

          {Array.isArray(restaurant.reviews) &&
            restaurant.reviews.length > 0 && (
              <Reviews reviews={restaurant.reviews} />
            )}
        </article>
      ))}
    </>
  );
};
