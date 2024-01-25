export interface IMovie {
  _id?: string;
  name: string;
  category: IMovieCategory[];
  description: string;
  img: string;
}

export enum IMovieCategory {
  comedy = "COMEDY",
  horror = "HORROR",
  action = "ACTION",
  romance = "ROMANCE",
  cartoon = "CARTOON",
  documentary = "DOCUMENTARY",
  family = "FAMILY",
  sci_fi = "SCI_FI",
}

export type IMovieCategories =
  | IMovieCategory.comedy
  | IMovieCategory.horror
  | IMovieCategory.action
  | IMovieCategory.romance
  | IMovieCategory.cartoon
  | IMovieCategory.documentary
  | IMovieCategory.family
  | IMovieCategory.sci_fi;

export const movieCategories: IMovieCategory[] = [
  IMovieCategory.comedy,
  IMovieCategory.horror,
  IMovieCategory.action,
  IMovieCategory.romance,
  IMovieCategory.cartoon,
  IMovieCategory.documentary,
  IMovieCategory.family,
  IMovieCategory.sci_fi,
];
