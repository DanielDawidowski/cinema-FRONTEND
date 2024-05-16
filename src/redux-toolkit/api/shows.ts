import { createAsyncThunk } from "@reduxjs/toolkit";
import { showService } from "../../services/api/show/show.service";
import { IShow } from "../../interfaces/show/show.interface";

export interface IShowsList {
  list: IShow[];
  totalShows: number;
}

export interface IShowsReducer {
  city: string;
  movieId: string;
  page: number;
}

// Define the payload creator function
export const getShowsList = createAsyncThunk<IShowsList, IShowsReducer>(
  "shows/getShowsList",
  async ({ city, movieId, page }: IShowsReducer) => {
    try {
      if (city || movieId) {
        const response = await showService.getShowsByFilters(
          city ? city : movieId,
          movieId,
          page
        );
        return {
          list: response.data.list,
          totalShows: response.data.totalShows,
        };
      } else {
        const response = await showService.getAllShow(page);
        return {
          list: response.data.list,
          totalShows: response.data.totalShows,
        };
      }
    } catch (error) {
      console.error("error", error);
      throw error; // Rethrow the error to indicate the failure of the async operation
    }
  }
);
