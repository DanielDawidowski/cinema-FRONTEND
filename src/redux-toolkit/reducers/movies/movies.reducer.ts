import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IMovie,
  IMovieCategory,
  IMovieList,
} from "../../../interfaces/movie/movie.interface";
import { getMoviesList } from "../../api/movies";

interface MoviesState {
  isLoading: boolean;
  movies: IMovie[];
  filteredMovies: IMovie[];
  filterCount: number;
}

const initialState: MoviesState = {
  isLoading: false,
  movies: [],
  filteredMovies: [],
  filterCount: 0,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    filterMovies: (
      state,
      action: PayloadAction<{
        categories: IMovieCategory[];
        alphabet: boolean;
        latest: boolean;
        movies: IMovie[];
      }>
    ) => {
      const { categories, alphabet, latest, movies } = action.payload;
      state.filteredMovies = [...movies];
      const total = 0;
      if (categories.length > 0) {
        state.filteredMovies = state.filteredMovies.filter((movie) => {
          return categories.every((category) =>
            movie.category.includes(category)
          );
        });
        state.filterCount = categories.length > 0 ? total + 1 : 0;
      }
      if (alphabet) {
        state.filteredMovies = state.filteredMovies.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        state.filterCount += !latest ? total + 1 : 0;
      }
      if (latest) {
        state.filteredMovies = state.filteredMovies.sort(
          (a, b) =>
            new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime()
        );
        state.filterCount += !alphabet ? total + 1 : 0;
      }
      if (categories.length === 0 && (alphabet || latest)) {
        state.filterCount = 1;
      }
    },

    clearFilters: (state, action: PayloadAction<{ movies: IMovie[] }>) => {
      const { movies } = action.payload;
      state.filterCount = 0;
      state.movies = movies;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getMoviesList.fulfilled,
      (state, action: PayloadAction<IMovieList>) => {
        state.isLoading = false;
        const { list } = action.payload;
        state.movies = list;
      }
    );
    builder.addCase(getMoviesList.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { filterMovies, clearFilters } = moviesSlice.actions;

export default moviesSlice.reducer;
