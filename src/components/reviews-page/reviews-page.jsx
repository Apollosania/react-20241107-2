import { useParams } from "react-router-dom";
import { Reviews } from "../reviews/reviews";
import { ReviewForm } from "../review-form/review-form.jsx";
import { useAuth } from "../auth-context/use-auth.js";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useCallback, useEffect } from "react";
import {
  useAddReviewMutation,
  useGetRestaurantByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../../redux/services/api/index.js";
import { QueryPreloader } from "../query-preloader/query-preloader";

export const ReviewsPage = () => {
  const { auth } = useAuth();
  const { restaurantId } = useParams();
  const { setTitle } = useLayoutTitle();
  const { isFetching: isGetUsersFetching, isError: isGetUsersError } =
    useGetUsersQuery();
  const {
    data: restaurant,
    isFetching: isGetRestaurantFetching,
    isError: isGetRestaurantError,
  } = useGetRestaurantByIdQuery(restaurantId);
  const {
    data: reviews,
    isFetching: isGetReviewsFetching,
    isError: isGetReviewsError,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const [addReview] = useAddReviewMutation();
  const handleAddReview = useCallback(
    (review) => {
      addReview({
        restaurantId,
        review: { ...review, userId: auth?.user?.id },
      });
    },
    [addReview, restaurantId, auth?.user],
  );

  useEffect(() => {
    if (restaurant) {
      setTitle(`${restaurant?.name} - Отзывы`);
    }
  }, [setTitle, restaurant?.name]);

  return (
    <QueryPreloader
      {...{
        isFetching:
          isGetRestaurantFetching || isGetUsersFetching || isGetReviewsFetching,
        isError: isGetRestaurantError || isGetUsersError || isGetReviewsError,
      }}
    >
      <Reviews reviews={reviews} />
      {auth.isAuthorized && (
        <ReviewForm key={restaurantId} onSubmit={handleAddReview} />
      )}
    </QueryPreloader>
  );
};
