import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE } from "../../../constants/api.js";
import { selectUsersIds } from "./users-slice.js";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/users`);

      const result = await response.json();

      if (!result) {
        throw new Error("users/getUsers no data");
      }

      return result;
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
  {
    condition(_, { getState }) {
      return selectUsersIds(getState()).length === 0;
    },
  },
);
