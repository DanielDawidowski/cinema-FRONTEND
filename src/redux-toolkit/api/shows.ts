import { createAsyncThunk } from "@reduxjs/toolkit";
import { showService } from "../../services/api/show/show.service";
import { IShows } from "../../interfaces/show/show.interface";

export interface IShowsList {
  list: IShows[];
  totalShows: number;
}

export interface IShowsReducer {
  city: string;
}

export const getShowsList = createAsyncThunk<IShowsList, IShowsReducer>(
  "shows/getShowsList",
  async ({ city }: IShowsReducer) => {
    try {
      const response = await showService.getShowsByCity(city);
      return {
        list: response.data.list,
        totalShows: response.data.totalShows,
      };
    } catch (error) {
      console.error("error", error);
      throw error; // Rethrow the error to indicate the failure of the async operation
    }
  }
);
