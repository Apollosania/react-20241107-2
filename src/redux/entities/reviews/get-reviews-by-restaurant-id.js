import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE } from "../../../constants/api.js";

export const getReviewsByRestaurantId = createAsyncThunk(
  "reviews/getReviewsByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${API_BASE}/reviews?restaurantId=${restaurantId}`,
      );

      const result = await response.json();

      if (!result) {
        throw new Error("reviews/getReviewsByRestaurantId no data");
      }

      return result;
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
);
