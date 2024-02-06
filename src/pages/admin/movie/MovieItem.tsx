import React from "react";
import type { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { IMovie } from "../../../interfaces/movie/movie.interface";
import { Icons, MovieListItem } from "./CreateMovie.styles";
import { themeGlobal } from "../../../components/layout/globalStyles/variables";

interface IMowieProps {
  movie: IMovie;
  deleteMovie: (movieId: string) => Promise<void>;
}
const MovieItem: FC<IMowieProps> = ({ movie, deleteMovie }): ReactElement => {
  return (
    <MovieListItem>
      <h3>{movie.name}</h3>
      <Icons>
        <Link to={`/admin/movie/edit/${movie._id}`}>
          <AiOutlineEdit style={{ fill: themeGlobal.blue }} />
        </Link>
        <MdDeleteForever
          style={{ fill: themeGlobal.red }}
          onClick={() => deleteMovie(movie._id as string)}
        />
      </Icons>
    </MovieListItem>
  );
};

export default MovieItem;
