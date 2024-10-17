import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favoritesSlice";
import moviesReducer from "./slices/moviesSlice";

/**
 * Skapar och konfigurerar Redux-storen med två reducers:
 * - favoritesReducer: Hanterar state för favoriter.
 * - moviesReducer: Hanterar state för filmer.
 */

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    movies: moviesReducer,
  },
});

export default store;
