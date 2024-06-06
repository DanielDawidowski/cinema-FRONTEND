import { IMovie } from "../movie/movie.interface";

export interface IShow {
  _id?: string;
  city: string;
  hall: number;
  movie: IMovieShow;
  time: string;
  createdAt?: string;
}

export interface IShowsList {
  list: IShow[];
  city: string;
  movieId: string;
}

export type IMovieShow = Pick<
  IMovie,
  "_id" | "name" | "img" | "category" | "description"
>;

export interface IShows extends IShow {
  _id: string;
  movie: IMovieShow;
  shows: IShow[];
}
