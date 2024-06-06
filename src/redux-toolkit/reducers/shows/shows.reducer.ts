import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IShowsList, getShowsList } from "../../api/shows";
import { IShows } from "../../../interfaces/show/show.interface";
import { IMovieCategory } from "../../../interfaces/movie/movie.interface";

interface ShowsState {
  isLoading: boolean;
  showsList: IShows[];
  city: string;
  movieId: string;
  totalShows: number;
  filteredShows: IShows[];
  filterCount: number;
}

const initialState: ShowsState = {
  isLoading: false,
  showsList: [],
  city: "",
  movieId: "",
  totalShows: 0,
  filteredShows: [],
  filterCount: 0,
};

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    filterShows: (
      state,
      action: PayloadAction<{
        categories: IMovieCategory[];
        alphabet: boolean;
        latest: boolean;
        showsList: IShows[];
      }>
    ) => {
      const { categories, alphabet, latest, showsList } = action.payload;
      state.filteredShows = [...showsList];
      const total = 0;
      if (categories.length > 0) {
        state.filteredShows = state.filteredShows.filter((show) => {
          return categories.every((category) =>
            show.movie.category.includes(category)
          );
        });
        state.filterCount = categories.length > 0 ? total + 1 : 0;
      }
      if (alphabet) {
        state.filteredShows = state.filteredShows.sort((a, b) =>
          a.movie.name.localeCompare(b.movie.name)
        );
        state.filterCount += !latest ? total + 1 : 0;
      }
      if (latest) {
        state.filteredShows = state.filteredShows.sort(
          (a, b) =>
            new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime()
        );
        state.filterCount += !alphabet ? total + 1 : 0;
      }
      if (categories.length === 0 && (alphabet || latest)) {
        state.filterCount = 1;
      }
    },
    clearFilters: (state, action: PayloadAction<{ showsList: IShows[] }>) => {
      const { showsList } = action.payload;
      state.filterCount = 0;
      state.showsList = showsList;
    },
    setCity: (state, action: PayloadAction<{ city: string }>) => {
      const { city } = action.payload;
      state.city = city;
    },
    setMovieId: (state, action: PayloadAction<{ movieId: string }>) => {
      const { movieId } = action.payload;
      state.movieId = movieId;
    },
    clear: (state) => {
      state.movieId = "";
      state.city = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShowsList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getShowsList.fulfilled,
      (state, action: PayloadAction<IShowsList>) => {
        state.isLoading = false;
        const { list, totalShows } = action.payload;
        state.showsList = list;
        state.totalShows = totalShows;
        // const { city, movieId } = action.meta.arg;
        // Use city and movieId as needed
        // state.city = city;
        // state.movieId = movieId;
      }
    );
    builder.addCase(getShowsList.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setCity, setMovieId, filterShows, clearFilters, clear } =
  showsSlice.actions;
export default showsSlice.reducer;
