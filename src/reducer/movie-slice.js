import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  popularMovies: [],
  movies: [],
  topMovies: [],
};

// Membuat extra action untuk fetch data
// Ongoing
export const movieAsync = createAsyncThunk(
  "movie/fetchMovie",
  async () => {
    const response = await axios.get(
      `https://api.jikan.moe/v4/seasons/now`
    );
    return response.data;
  });
// Popular
export const popularMovieAsync = createAsyncThunk(
  "movie/fetchPopularMovie",
  async () => {
    const response = await axios.get(
      `https://api.jikan.moe/v4/seasons/upcoming`
    );
    return response.data;
  }
);
// Top rated
export const topMovieAsync = createAsyncThunk(
  "movie/fetchPopMovie",
  async () => {
    const response = await axios.get(
      `https://api.jikan.moe/v4/top/anime`
    );
    return response.data;
  }
);

const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(movieAsync.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.loading = false;
      })
      .addCase(movieAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(movieAsync.rejected, (state, action) => {
        console.log("fail to get ongoing movies");
      })
      .addCase(topMovieAsync.fulfilled, (state, action) => {
        state.topMovies = action.payload.data;
        state.loading = false;
      })
      .addCase(topMovieAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(topMovieAsync.rejected, (state, action) => {
        console.log("fail to get top movies");
      })
      .addCase(popularMovieAsync.fulfilled, (state, action) => {
        state.popularMovies = action.payload.data;
        state.loading = false;
      })
      .addCase(popularMovieAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(popularMovieAsync.rejected, (state, action) => {
        console.log("fail to get popular movies");
      });
  },
});

// Membuat selector untuk mengambil state
export const selectMovie = (state) => state.movie.movies;
export const selectPopularMovie = (state) => state.movie.popularMovies;
export const selectTopMovie = (state) => state.movie.topMovies;
export const selectLoadingState = (state) => state.movie.loading;

export default MovieSlice.reducer;
