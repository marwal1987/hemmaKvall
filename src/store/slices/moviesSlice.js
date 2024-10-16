import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Hämta API-nyckeln från .env
const apikey = import.meta.env.VITE_OMDB_API_KEY;

// Hämtar detaljerad information om en film från OMDB baserat på imdbID.
const fetchMovieDetails = async (imdbID) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}&plot=full`
    );

    if (!response.ok) {
      throw new Error(`Error fetching movie details: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching movie details: ${error.message}`);
  }
};

// Hämtar filmer från OMDB baserat på användarens sökterm.
export const fetchMoviesBySearchTerm = createAsyncThunk(
  "movies/fetchAll",
  async (query) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=${apikey}`
      );

      if (!response.ok) {
        throw new Error(`Error fetching movies: ${response.statusText}`);
      }

      const data = await response.json();

      // Kontrollera om data finns
      if (!data.Search) {
        throw new Error("No movies found");
      }

      // Hämta fullständig info för varje film i sökresultatet
      const detailedMovies = await Promise.all(
        data.Search.map((movie) => fetchMovieDetails(movie.imdbID))
      );

      return detailedMovies; // Returnera filmer med fullständig information
    } catch (error) {
      throw new Error(`Error fetching movies: ${error.message}`);
    }
  }
);

/**
 * moviesSlice
 *
 * Hanterar filmrelaterad data, inklusive status och eventuella fel.
 *
 * Hanterar tre lägen:
 * - pending (när hämtningen pågår)
 * - fulfilled (när filmerna har hämtats)
 * - rejected (när något gick fel)
 */

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesBySearchTerm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMoviesBySearchTerm.fulfilled, (state, action) => {
        state.movies = action.payload || [];
        state.status = "succeeded";
      })
      .addCase(fetchMoviesBySearchTerm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Exportera reducer för att inkludera i Redux-storen
export default moviesSlice.reducer;
