import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IShowsList, getShowsList } from "../../api/shows";
import { IShow } from "../../../interfaces/show/show.interface";

interface MoviesState {
  isLoading: boolean;
  showsList: IShow[];
  city: string;
  movieId: string;
  totalShows: number;
}

const initialState: MoviesState = {
  isLoading: false,
  showsList: [],
  city: "",
  movieId: "",
  totalShows: 0,
};

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
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

export const { setCity, setMovieId, clear } = showsSlice.actions;
export default showsSlice.reducer;
