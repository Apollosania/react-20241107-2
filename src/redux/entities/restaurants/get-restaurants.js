import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsIds } from "./restaurants-slice.js";
import { API_BASE } from "../../../constants/api.js";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/restaurants`);

      const result = await response.json();

      if (!result) {
        throw new Error("restaurants/getRestaurants no data");
      }

      return result;
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
  {
    condition(_, { getState }) {
      return selectRestaurantsIds(getState()).length === 0;
    },
  },
);
