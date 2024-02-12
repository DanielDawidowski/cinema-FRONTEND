import React from "react";
import type { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { IMovie } from "../../../../interfaces/movie/movie.interface";
import { themeGlobal } from "../../../../components/layout/globalStyles/variables";
import {
  Icons,
  ListItem,
} from "../../../../components/layout/globalStyles/global.styles";

interface IMovieProps {
  movie: IMovie;
  deleteMovie: (movieId: string) => Promise<void>;
}

const MovieItem: FC<IMovieProps> = ({ movie, deleteMovie }): ReactElement => {
  return (
    <ListItem $img>
      <img src={movie.img} alt={movie.name} />
      <h4>{movie.name}</h4>
      <Icons>
        <Link to={`/admin/movie/edit/${movie._id}`}>
          <AiOutlineEdit style={{ fill: themeGlobal.blue }} />
        </Link>
        <MdDeleteForever
          style={{ fill: themeGlobal.red }}
          onClick={() => deleteMovie(movie._id as string)}
        />
      </Icons>
    </ListItem>
  );
};

export default MovieItem;
