"use client";

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
import { Reviews } from "./reviews.jsx";

export const ReviewsContainer = ({ restaurantId }) => {
  const { auth } = useAuth();
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
