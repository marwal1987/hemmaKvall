import { createSlice } from "@reduxjs/toolkit";

const initialState = { favoritesList: [] };

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const movieExists = state.favoritesList.find(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (!movieExists) {
        state.favoritesList.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
