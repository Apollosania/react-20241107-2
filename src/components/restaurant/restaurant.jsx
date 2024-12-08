import { FoodMenu } from "../food-menu/food-menu.jsx";
import { Reviews } from "../reviews/reviews.jsx";
import { Title } from "../typography/title";
import { ReviewForm } from "../review-form/review-form.jsx";
import { useAuth } from "../auth-context/use-auth.js";

export const Restaurant = ({ id, name, menu, reviews }) => {
  const { auth } = useAuth();

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

      {auth.isAuthorized && <ReviewForm key={id} />}
    </article>
  );
};
