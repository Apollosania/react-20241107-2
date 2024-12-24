import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE } from "../../../constants/api.js";

export const getDishesByRestaurantId = createAsyncThunk(
  "dishes/getDishesByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${API_BASE}/dishes?restaurantId=${restaurantId}`,
      );

      const result = await response.json();

      if (!result) {
        throw new Error("dishes/getDishesByRestaurantId no data");
      }

      return result;
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
);
