import { API_BASE } from "../constants/api.js";

export const getDishById = async (dishId) => {
  const result = await fetch(`${API_BASE}/dish/${dishId}`);

  return result.json();
};
