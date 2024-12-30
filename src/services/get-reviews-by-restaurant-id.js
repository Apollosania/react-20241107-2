import { API_BASE } from "../constants/api.js";

export const getReviewsByRestaurantId = async (restaurantId) => {
  const result = await fetch(
    `${API_BASE}/reviews?restaurantId=${restaurantId}`,
  );

  return result.json();
};
