import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: { items: [] },
  reducers: {
    toggleFavorites: (state, action) => {
      const found = state.items.find((p) => p.id === action.payload.id);
      if (found) {
        state.items = state.items.filter((q) => q.id !== action.payload.id);
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const { toggleFavorites, clearFavorites } = wishListSlice.actions;

export default wishListSlice.reducer;
