import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  favoritesList: [],
  reducers: {
    addToFavorites: (state, action) => {
      const movie = state.favoritesList.find(
        (movie) => movie.id === action.payload.id,
        state.favoritesList.push(movie));
      }
    },
    removeFromFavorites: (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
);

export const { addToFavorites, removeFromFavorites } =
favoritesSlice.actions;
export default favoritesSlice.reducer;