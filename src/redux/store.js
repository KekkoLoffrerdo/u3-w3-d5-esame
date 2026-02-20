import { configureStore } from "@reduxjs/toolkit";
import releasesReducer from "./releasesSlice";
import favoritesReducer from "./favoritesSlice";
export const store = configureStore({
  reducer: {
    releases: releasesReducer,
    favorites: favoritesReducer,
  },
});
