import { AxiosResponse } from "axios";
import axios from "../../axios";
import { IShow } from "../../../interfaces/show/show.interface";

class ShowService {
  async create(body: IShow): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.post("/show", body);
    return response;
  }

  async filterShows(
    city: string | undefined,
    movieId: string | undefined
  ): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get(
      `/shows/filter?${city ? `city=${city}` : ""}${
        movieId ? `&movieId=${movieId}` : ""
      }`
    );
    return response;
  }

  async getShow(showId: string | undefined): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get(`/show/${showId}`);
    return response;
  }

  async getShowsByMovie(movieId: string | undefined): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get(
      `/shows/movie/${movieId}`
    );
    return response;
  }

  async getShowsByCity(city: string | undefined): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get(
      `/shows/city/${city}`
    );
    return response;
  }

  async getShowsByFilters(
    city: string | undefined,
    movieId: string | undefined
  ): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get(
      `/shows${city ? `?city=${city}` : ""}${
        movieId ? `&movieId=${movieId}` : ""
      }`
    );
    return response;
  }

  async getShowsByMovieName(
    city: string | undefined,
    movieId: string | undefined
  ): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get(
      `/shows/movie${city ? `/${city}` : ""}${city ? `/${movieId}` : ""}`
    );
    return response;
  }

  async updateShow(showId: string, body: IShow): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.put(
      `/show/${showId}`,
      body
    );
    return response;
  }

  async deleteShow(showId: string): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.delete(
      `/show/${showId}`
    );
    return response;
  }
}

export const showService = new ShowService();
