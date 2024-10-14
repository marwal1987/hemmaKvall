import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Hämta API-nyckeln från .env
const apikey = import.meta.env.VITE_OMDB_API_KEY;

// Gör en separat fetch för varje film för att hämta fullständig data
const fetchMovieDetails = async (imdbID) => {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}&plot=full`
  );
  const data = await response.json();
  return data;
};

// Fetch alla filmer baserat på sökterm och hämta fullständig data för varje film
export const fetchMoviesBySearchTerm = createAsyncThunk(
  "movies/fetchAll",
  async (query) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=${apikey}`
    );
    const data = await response.json();

    // Hämta fullständig info för varje film i sökresultatet
    const detailedMovies = await Promise.all(
      data.Search.map((movie) => fetchMovieDetails(movie.imdbID))
    );

    return detailedMovies; // Returnera filmer med fullständig information
  }
);

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

export default moviesSlice.reducer;
