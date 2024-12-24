import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./restaurants-slice.js";
import { API_BASE } from "../../../constants/api.js";

export const getRestaurantById = createAsyncThunk(
  "restaurant/getRestaurantById",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/restaurant/${restaurantId}`);
      const result = await response.json();

      if (!result) {
        throw new Error("restaurant/getRestaurantById no data");
      }

      return result;
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
  {
    condition: (restaurantId, { getState }) => {
      return !selectRestaurantById(getState(), restaurantId);
    },
  },
);
