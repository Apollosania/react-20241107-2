import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishById } from "./get-dish-by-id.js";
import { getDishesByRestaurantId } from "./get-dishes-by-restaurant-id.js";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      })
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      }),
});

export const { selectById: selectDishById } = entityAdapter.getSelectors(
  (state) => state[dishesSlice.name],
);
