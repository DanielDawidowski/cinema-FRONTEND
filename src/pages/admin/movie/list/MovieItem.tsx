import React from "react";
import type { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { IMovie } from "../../../../interfaces/movie/movie.interface";
import { themeGlobal } from "../../../../components/layout/globalStyles/variables";
import {
  Icons,
  StyledTr,
  StyledTd,
} from "../../../../components/layout/globalStyles/global.styles";

interface IMovieProps {
  movie: IMovie;
  deleteMovie: (movieId: string) => Promise<void>;
  search: string;
}

const MovieItem: FC<IMovieProps> = ({
  movie,
  deleteMovie,
  search,
}): ReactElement => {
  const highlightSearchTerm = (name: string, search: string): ReactElement => {
    if (!search) return <>{name}</>;
    const regex = new RegExp(`(${search})`, "gi");
    const parts = name.split(regex);
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === search.toLowerCase() ? (
            <span key={index} style={{ color: themeGlobal.orange }}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <StyledTr>
      <StyledTd>
        <img src={movie.img} alt={movie.name} />
      </StyledTd>
      <StyledTd>
        <h4>{highlightSearchTerm(movie.name, search)}</h4>
      </StyledTd>
      <StyledTd>
        <Icons>
          <Link to={`/admin/movie/edit/${movie._id}`}>
            <AiOutlineEdit style={{ fill: themeGlobal.blue }} />
          </Link>
          <MdDeleteForever
            style={{ fill: themeGlobal.red }}
            onClick={() => deleteMovie(movie._id as string)}
          />
        </Icons>
      </StyledTd>
    </StyledTr>
  );
};

export default MovieItem;
