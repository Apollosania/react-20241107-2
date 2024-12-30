import { ReviewsContainer } from "../reviews/reviews-container";

export const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  return <ReviewsContainer restaurantId={restaurantId} />;
};
