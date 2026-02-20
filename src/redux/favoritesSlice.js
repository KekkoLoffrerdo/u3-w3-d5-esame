import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    list: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const song = action.payload;
      const index = state.list.findIndex((s) => s.id === song.id);

      if (index >= 0) {
        state.list.splice(index, 1);
      } else {
        state.list.push(song);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
