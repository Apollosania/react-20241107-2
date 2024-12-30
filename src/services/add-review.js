import { API_BASE } from "../constants/api.js";

export const addReview = async ({ restaurantId, review }) => {
  const result = await fetch(`${API_BASE}/review/${restaurantId}`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await result.json();
};
