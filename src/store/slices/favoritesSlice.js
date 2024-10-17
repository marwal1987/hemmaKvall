import { createSlice } from "@reduxjs/toolkit";
/**
 * favoritesSlice
 * 
 * En slice av Redux-storen som hanterar favoritfilmlogiken. 
 * Den innehåller två reducers: 
 *  - addFavorite: Lägger till en film i listan över favoriter.
 *  - removeFavorite: Tar bort en film från listan över favoriter.
 *
 * Initial state
 * 
 * - favoritesList: En tom lista som kommer att innehålla användarens favoritfilmer.
 */

const initialState = { favoritesList: [] };

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const movieExists = state.favoritesList.find( // Kolla om filmen finns
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (!movieExists) { // Om filmen inte redan finns i listan, läggs den till
        state.favoritesList.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favoritesList = state.favoritesList.filter(  // Filtrerar bort den film som har samma imdbID som skickas via action.payload
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions; // Exporterar actions för att kunna användas i komponenter
export default favoritesSlice.reducer; // // Exporterar reducer för att inkludera den i Redux-storen
