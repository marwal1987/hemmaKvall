// Skelett

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllMovies = createAsyncThunk("movies/fetchAll", async () => {
  const response = await axios.get("api-bla-bla-bla");
  return response.data;
});

// Slice för produkterna
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: null,
  },
  extraReducers: (builder) => {
    // Hanterar alla produkter
    builder
      .addCase(fetchAllMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchAllMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
