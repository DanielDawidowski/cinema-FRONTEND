import { IMovieCategories } from "../../interfaces/movie/movie.interface";

export interface SelectProps {
  label: string;
  options: string[];
  onSelect: (selectedOption: string & IMovieCategories) => void;
}
