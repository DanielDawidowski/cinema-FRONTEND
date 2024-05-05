import { createAsyncThunk } from "@reduxjs/toolkit";
import { showService } from "../../services/api/show/show.service";
import { IShow } from "../../interfaces/show/show.interface";

export interface IShowsList {
  list: IShow[];
}

export interface IShowsReducer {
  city: string;
  movieId: string;
}

// Define the payload creator function
export const getShowsList = createAsyncThunk<IShowsList, IShowsReducer>(
  "shows/getShowsList",
  async ({ city, movieId }: IShowsReducer) => {
    try {
      if (city || movieId) {
        const response = await showService.getShowsByFilters(
          city ? city : movieId,
          movieId
        );
        return {
          list: response.data.list,
          city: city ? city : movieId,
          movieId,
        };
      } else {
        const response = await showService.getAllShow();
        return { list: response.data.list, city: "", movieId: "" };
      }
    } catch (error) {
      console.error("error", error);
      throw error; // Rethrow the error to indicate the failure of the async operation
    }
  }
);
