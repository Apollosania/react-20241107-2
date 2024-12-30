"use client";

import { useCallback } from "react";
import { addReview } from "../../services/add-review.js";
import { ReviewForm } from "./review-form.jsx";
import { useAuth } from "../auth-context/use-auth.js";

export const ReviewFormContainer = ({ restaurantId }) => {
  const { auth } = useAuth();

  const handleAddReview = useCallback(
    async (review) => {
      await addReview({
        restaurantId,
        review: { ...review, userId: auth?.user?.id },
      });
    },
    [addReview, restaurantId, auth?.user],
  );

  return (
    auth.isAuthorized && (
      <ReviewForm key={restaurantId} onSubmit={handleAddReview} />
    )
  );
};
