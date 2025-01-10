import { API_BASE } from "../constants/api.js";

export const getUsers = async () => {
  const result = await fetch(`${API_BASE}/users`);

  return result.json();
};
