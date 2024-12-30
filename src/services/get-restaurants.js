import { API_BASE } from "../constants/api.js";

export const getRestaurants = async () => {
  const result = await fetch(`${API_BASE}/restaurants`);

  return result.json();
};
