import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return;
      }

      state[payload] = state[payload] - 1 || 0;
    },
  },
  selectors: {
    selectCartItems: (state) => {
      return Object.keys(state).map((id) => ({ id, amount: state[id] }));
    },
    selectCartItemAmountById: (state, id) => state[id],
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectCartItemAmountById } = cartSlice.selectors;

export const selectCartSlice = (state) => state[cartSlice.name];

export const selectCartItems = createSelector([selectCartSlice], (cartState) =>
  Object.keys(cartState).map((id) => ({ id, amount: cartState[id] })),
);
