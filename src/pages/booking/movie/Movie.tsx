import React from "react";
import type { FC, ReactElement } from "react";
import { MovieStyles } from "./Movie.styles";
import { Line } from "../../../components/layout/globalStyles/global.styles";
import { IShow } from "../../../interfaces/show/show.interface";

interface IMovieProps {
  show: IShow;
}

const Movie: FC<IMovieProps> = (props): ReactElement => {
  const { show } = props;

  return (
    <MovieStyles>
      <img src={show?.movie?.img} alt={show?.movie?.name} />
      <h5>{show?.movie?.name}</h5>
      <Line $gradient $width="100%" />
      <table>
        <tbody>
          <tr>
            <td>city</td>
            <td>{show.city}</td>
          </tr>
          <tr>
            <td>hall</td>
            <td>{show.hall}</td>
          </tr>
          <tr>
            <td>time</td>
            <td>{show.time}</td>
          </tr>
        </tbody>
      </table>
    </MovieStyles>
  );
};

export default Movie;
