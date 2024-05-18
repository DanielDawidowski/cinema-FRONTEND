import { IMovie } from "../interfaces/movie/movie.interface";
import { IMovieShow } from "../interfaces/show/show.interface";

export class MovieUtils {
  static readAsBase64(file: File): Promise<string> {
    const reader = new FileReader();
    const fileValue: Promise<string> = new Promise((resolve, reject) => {
      reader.addEventListener("load", () => {
        if (reader.result) {
          resolve(reader.result.toString());
        } else {
          reject(new Error("Failed to read the file."));
        }
      });

      reader.addEventListener("error", (event: ProgressEvent<FileReader>) => {
        reject(event);
      });

      reader.readAsDataURL(file);
    });

    return fileValue;
  }

  static movieTitles = (movies: IMovie[]): string[] => {
    return movies.map((el) => el.name);
  };

  static movieId = (movies: IMovie[], name: string): string => {
    const matchingMovie = movies.find((item) => item.name === name);
    return matchingMovie?._id!;
  };

  static movieTitleFromId = (movies: IMovie[], movieId: string): string => {
    const matchingMovie = movies.find((item) => item._id === movieId);
    return matchingMovie?.name!;
  };

  static movieShow = (movies: IMovie[], name: string): IMovieShow => {
    const matchingMovie = movies.find((item) => item.name === name);
    return {
      _id: matchingMovie?._id!,
      name: matchingMovie?.name!,
      img: matchingMovie?.img!,
    };
  };
}
