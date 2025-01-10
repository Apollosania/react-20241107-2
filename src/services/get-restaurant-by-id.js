import { API_BASE } from "../constants/api.js";

export const getRestaurantById = async (restaurantId) => {
  const result = await fetch(`${API_BASE}/restaurant/${restaurantId}`);

  return result.json();
};
