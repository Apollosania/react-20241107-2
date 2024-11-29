import { FoodMenu } from "../food-menu/food-menu.jsx";
import { Reviews } from "../reviews/reviews.jsx";
import { Title } from "../typography/title";
import { ReviewForm } from "../review-form/review-form.jsx";

export const Restaurant = ({ id, name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <article>
      <Title type={"primary"} level={2}>
        {name}
      </Title>

      {Array.isArray(menu) && menu.length > 0 && <FoodMenu foodMenu={menu} />}

      {Array.isArray(reviews) && reviews.length > 0 && (
        <Reviews reviews={reviews} />
      )}

      <ReviewForm key={id} />
    </article>
  );
};
