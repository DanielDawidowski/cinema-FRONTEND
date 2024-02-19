import { IMovieCategories } from "../../interfaces/movie/movie.interface";

export interface SelectProps {
  label: string;
  selectedOption: string | number;
  options: string[] | number[] | null;
  onSelect: (selectedOption: string & IMovieCategories & number) => void;
}
