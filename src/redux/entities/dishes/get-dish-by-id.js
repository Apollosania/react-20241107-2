import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE } from "../../../constants/api.js";
import { selectDishById } from "./dishes-slice";

export const getDishById = createAsyncThunk(
  "dish/getDishById",
  async (dishId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/dish/${dishId}`);
      const result = await response.json();

      if (!result) {
        throw new Error("dish/getDishById no data");
      }

      return result;
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
  {
    condition: (restaurantId, { getState }) => {
      return !selectDishById(getState(), restaurantId);
    },
  },
);
