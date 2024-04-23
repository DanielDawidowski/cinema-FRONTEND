import React from "react";
import type { FC, ReactElement } from "react";
import { Mask, MovieColumn, MovieItem } from "../../Home.styles";
import { IMovie } from "../../../../interfaces/movie/movie.interface";

interface IHomeMovieColumn {
  i: number;
  group: IMovie[];
  toggle: boolean;
  selected: IMovie | null;
  groupSize: number;
  handleMovie: () => void;
  handleClick: (obj: IMovie, i: number) => void;
}

const HomeMovieColumn: FC<IHomeMovieColumn> = (props): ReactElement => {
  const { groupSize, i, group, selected, toggle, handleClick, handleMovie } =
    props;

  return (
    <MovieColumn key={i} $length={groupSize}>
      {group.map((obj: IMovie, index: number) => (
        <MovieItem key={index} onClick={() => handleClick(obj, i)}>
          <img src={obj.img} alt={obj.name} />
          {selected ? (
            <Mask
              $selected={obj._id === selected?._id || !toggle}
              onClick={() => handleMovie()}
            />
          ) : null}
          <h5>{obj.name}</h5>
        </MovieItem>
      ))}
    </MovieColumn>
  );
};

export default HomeMovieColumn;
