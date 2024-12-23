import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import { Reviews } from "../reviews/reviews";
import { ReviewForm } from "../review-form/review-form.jsx";
import { useAuth } from "../auth-context/use-auth.js";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";

export const ReviewsPage = () => {
  const { auth } = useAuth();
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const { setTitle } = useLayoutTitle();

  useEffect(() => {
    setTitle(`${restaurant.name} - Отзывы`);
  }, [setTitle, restaurant.name]);

  return (
    <>
      <Reviews ids={restaurant.reviews} />
      {auth.isAuthorized && <ReviewForm key={restaurantId} />}
    </>
  );
};
