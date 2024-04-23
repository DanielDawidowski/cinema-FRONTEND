import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieService } from "../../services/api/movie/movie.service";
import { IMovieList } from "../../interfaces/movie/movie.interface";

const getMoviesList = createAsyncThunk<IMovieList>(
  "movie/getMovieList",
  async () => {
    try {
      const response = await movieService.getAllMovies();
      return response.data;
      // console.log("response", response.data.list);
    } catch (error) {
      console.error("error", error);
    }
  }
);

export { getMoviesList };
