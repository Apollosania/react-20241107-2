import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import { Reviews } from "../reviews/reviews";
import { ReviewForm } from "../review-form/review-form.jsx";
import { useAuth } from "../auth-context/use-auth.js";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";
import { useRequest } from "../../redux/hooks/use-request.js";
import { getReviewsByRestaurantId } from "../../redux/entities/reviews/get-reviews-by-restaurant-id.js";
import { RequestPreloader } from "../request-preloader/request-preloader";
import { getUsers } from "../../redux/entities/users/get-users.js";
import {
  FULFILLED_REQUEST_STATUS,
  PENDING_REQUEST_STATUS,
  REJECTED_REQUEST_STATUS,
} from "../../constants/request-status.js";

export const ReviewsPage = () => {
  const { auth } = useAuth();
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const { setTitle } = useLayoutTitle();
  const reviewsRequestStatus = useRequest(
    getReviewsByRestaurantId,
    restaurantId,
  );
  const usersRequestStatus = useRequest(getUsers);

  useEffect(() => {
    if (restaurant) {
      setTitle(`${restaurant?.name} - Отзывы`);
    }
  }, [setTitle, restaurant?.name]);

  const getRequestStatus = () => {
    if (
      reviewsRequestStatus === REJECTED_REQUEST_STATUS ||
      usersRequestStatus === REJECTED_REQUEST_STATUS
    ) {
      return REJECTED_REQUEST_STATUS;
    }

    if (
      reviewsRequestStatus === PENDING_REQUEST_STATUS ||
      usersRequestStatus === PENDING_REQUEST_STATUS
    ) {
      return PENDING_REQUEST_STATUS;
    }

    return FULFILLED_REQUEST_STATUS;
  };

  return (
    <RequestPreloader requestStatus={getRequestStatus()}>
      <Reviews ids={restaurant?.reviews} />
      {auth.isAuthorized && <ReviewForm key={restaurantId} />}
    </RequestPreloader>
  );
};
