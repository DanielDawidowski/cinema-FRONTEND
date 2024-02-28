import React, { useEffect, useCallback, useState } from "react";
import type { FC, ReactElement } from "react";
import { movieService } from "../../../services/api/movie/movie.service";
import { IMovie } from "../../../interfaces/movie/movie.interface";
import { IHall } from "../../../interfaces/hall/hall.interface";
import { MovieStyles } from "./Movie.styles";
import { Line } from "../../../components/layout/globalStyles/global.styles";

interface IMovieProps {
  movieId: string;
  hall: IHall;
}

const Movie: FC<IMovieProps> = (props): ReactElement => {
  const { movieId, hall } = props;
  const [movie, setMovie] = useState<IMovie>({} as IMovie);

  const getMovie = useCallback(async () => {
    try {
      const response = await movieService.getMovie(movieId as string);
      setMovie(response.data.movie);
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <MovieStyles>
      <img src={movie.img} alt={movie.name} />
      <h5>{movie.name}</h5>
      <Line $gradient $width="100%" />
      <table>
        <tbody>
          <tr>
            <td>city</td>
            <td>{hall.city}</td>
          </tr>
          <tr>
            <td>hall</td>
            <td>{hall.hallNumber}</td>
          </tr>
        </tbody>
      </table>
    </MovieStyles>
  );
};

export default Movie;
