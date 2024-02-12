import { AxiosResponse } from "axios";
import axios from "../../axios";
import { IMovie } from "../../../interfaces/movie/movie.interface";

class MovieService {
  async create(body: IMovie): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.post("/movie", body);
    return response;
  }

  async getAllMovies(): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get("/movies");
    return response;
  }

  async getMovie(movieId: string | undefined): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get(
      `/movie/${movieId}`
    );
    return response;
  }

  async updateMovie(movieId: string, body: IMovie): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.put(
      `/movie/${movieId}`,
      body
    );
    return response;
  }

  async deleteMovie(movieId: string): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.delete(
      `/movie/${movieId}`
    );
    return response;
  }
}

export const movieService = new MovieService();
