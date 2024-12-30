import { API_BASE } from "../constants/api.js";

export const getDishesByRestaurantId = async (restaurantId) => {
  const result = await fetch(`${API_BASE}/dishes?restaurantId=${restaurantId}`);

  return result.json();
};
