import { FoodMenu } from "../food-menu/food-menu.jsx";
import { Reviews } from "../reviews/reviews.jsx";

export const Restaurant = ({ name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <article>
      <h2>{name}</h2>

      {Array.isArray(menu) && menu.length > 0 && <FoodMenu foodMenu={menu} />}

      {Array.isArray(reviews) && reviews.length > 0 && (
        <Reviews reviews={reviews} />
      )}
    </article>
  );
};