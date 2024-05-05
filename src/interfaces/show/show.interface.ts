export interface IShow {
  _id?: string;
  city: string;
  hall: string;
  movie: string;
  time: string;
  createdAt?: string;
}

export interface IShowsList {
  list: IShow[];
  city: string;
  movieId: string;
}
