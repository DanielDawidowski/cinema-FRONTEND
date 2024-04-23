export interface IMovie {
  _id?: string;
  name: string;
  category: IMovieCategory[];
  description: string;
  director: string;
  actors: string[];
  img: string;
  createdAt?: Date;
}

export enum IMovieCategory {
  comedy = "COMEDY",
  thriller = "THRILLER",
  action = "ACTION",
  drama = "DRAMA",
  animation = "ANIMATION",
  biography = "BIOGRAPHY",
  adventure = "ADVENTURE",
  crime = "CRIME",
  history = "HISTORY",
}

export type IMovieCategories =
  | IMovieCategory.comedy
  | IMovieCategory.thriller
  | IMovieCategory.action
  | IMovieCategory.drama
  | IMovieCategory.animation
  | IMovieCategory.biography
  | IMovieCategory.adventure
  | IMovieCategory.crime
  | IMovieCategory.history;

export const movieCategories: IMovieCategory[] = [
  IMovieCategory.comedy,
  IMovieCategory.thriller,
  IMovieCategory.action,
  IMovieCategory.drama,
  IMovieCategory.animation,
  IMovieCategory.biography,
  IMovieCategory.adventure,
  IMovieCategory.crime,
  IMovieCategory.history,
];

export interface IMovieList {
  list: IMovie[];
}
