import { Reviews } from "./reviews.jsx";
import { getUsers } from "../../services/get-users.js";
import { getRestaurantById } from "../../services/get-restaurant-by-id.js";
import { getReviewsByRestaurantId } from "../../services/get-reviews-by-restaurant-id.js";
import { ReviewFormContainer } from "../review-form/review-form-container";

export const ReviewsContainer = async ({ restaurantId }) => {
  const users = await getUsers();
  const restaurant = await getRestaurantById(restaurantId);
  const reviews = await getReviewsByRestaurantId(restaurantId);

  return (
    <>
      <Reviews reviews={reviews} pageTitle={restaurant?.name} users={users} />
      <ReviewFormContainer restaurantId={restaurantId} key={restaurantId} />
    </>
  );
};
