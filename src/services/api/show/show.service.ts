import { AxiosResponse } from "axios";
import axios from "../../axios";
import { IShow } from "../../../interfaces/show/show.interface";

class ShowService {
  async create(body: IShow): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.post("/show", body);
    return response;
  }

  async getAllShow(page: number): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get(
      `/shows/all/${page}`
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
    movieId: string | undefined,
    page: number
  ): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get(
      `/shows/${city}${movieId ? "/" : ""}${movieId}/${page}`
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
