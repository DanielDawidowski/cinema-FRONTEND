import React, { useCallback, useState, useEffect } from "react";
import type { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { themeGlobal } from "../../../../components/layout/globalStyles/variables";
import {
  Icons,
  StyledTd,
  StyledTr,
} from "../../../../components/layout/globalStyles/global.styles";
import { IShow } from "../../../../interfaces/show/show.interface";
import { IMovie } from "../../../../interfaces/movie/movie.interface";
import { movieService } from "../../../../services/api/movie/movie.service";
import { hallService } from "../../../../services/api/hall/hall.service";
import { IHall } from "../../../../interfaces/hall/hall.interface";

interface IShowProps {
  show: IShow;
  deleteShow: (movieId: string) => Promise<void>;
}

const ShowItem: FC<IShowProps> = ({
  show,
  deleteShow,
}): ReactElement | null => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  const [hall, setHall] = useState<IHall>({} as IHall);

  const getMovie = useCallback(async () => {
    try {
      const response = await movieService.getMovie(show.movie._id as string);
      setMovie(response.data.movie);
    } catch (error) {
      console.error(error);
    }
  }, [show.movie._id]);

  const getHall = useCallback(async () => {
    try {
      const response = await hallService.getHall(show.hall);
      setHall(response.data.hall);
    } catch (error) {
      console.error(error);
    }
  }, [show.hall]);

  useEffect(() => {
    getHall();
  }, [getHall]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <StyledTr>
      <StyledTd>
        <img src={show.movie.img} alt={show.movie.name} />
      </StyledTd>
      <StyledTd>{show.movie.name}</StyledTd>
      <StyledTd>{show.city}</StyledTd>
      <StyledTd>{hall.hallNumber}</StyledTd>
      <StyledTd>{show.time}</StyledTd>

      <StyledTd>
        <Icons>
          <Link to={`/admin/show/edit/${show._id}`}>
            <AiOutlineEdit style={{ fill: themeGlobal.blue }} />
          </Link>
          <MdDeleteForever
            style={{ fill: themeGlobal.red }}
            onClick={() => deleteShow(show._id as string)}
          />
        </Icons>
      </StyledTd>
    </StyledTr>
  );
};

export default ShowItem;
