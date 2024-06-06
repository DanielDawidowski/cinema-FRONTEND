import React from "react";
import type { FC, ReactElement } from "react";
import { Mask, MovieColumn, MovieItem } from "./HomeMovies.styles";
import { IMovie } from "../../../../interfaces/movie/movie.interface";
import { IShows } from "../../../../interfaces/show/show.interface";

interface IMovieColumn {
  i: number;
  group: IShows[];
  toggle: boolean;
  selected: IShows | null;
  groupSize: number;
  handleMovie: () => void;
  handleClick: (obj: IShows, i: number) => void;
}

const HomeMovieColumn: FC<IMovieColumn> = (props): ReactElement => {
  const { groupSize, i, group, selected, toggle, handleClick, handleMovie } =
    props;

  return (
    <MovieColumn key={i} $length={groupSize}>
      {group.map((obj: IShows, index: number) => (
        <MovieItem key={index} onClick={() => handleClick(obj, i)}>
          <img src={obj?.movie?.img} alt={obj?.movie?.name} />
          {selected ? (
            <Mask
              $selected={obj?.movie?._id === selected?.movie?._id || !toggle}
              onClick={() => handleMovie()}
            />
          ) : null}
          <h5>{obj?.movie?.name}</h5>
        </MovieItem>
      ))}
    </MovieColumn>
  );
};

export default HomeMovieColumn;
