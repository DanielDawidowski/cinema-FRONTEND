import { IMovieCategories } from "../../interfaces/movie/movie.interface";

export interface SelectProps {
  label: string;
  options: string[] | number[] | null;
  onSelect: (selectedOption: string & IMovieCategories & number) => void;
}
