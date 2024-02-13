import React, { useCallback, useState } from "react";
import type { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { themeGlobal } from "../../../../components/layout/globalStyles/variables";
import {
  Grid,
  Icons,
  ListItem,
} from "../../../../components/layout/globalStyles/global.styles";
import { IShow } from "../../../../interfaces/show/show.interface";
import { IMovie } from "../../../../interfaces/movie/movie.interface";
import { movieService } from "../../../../services/api/movie/movie.service";
import { ValidationError } from "../../../../interfaces/error/Error.interface";
import useEffectOnce from "../../../../hooks/useEffectOnce";

interface IShowProps {
  show: IShow;
  deleteShow: (movieId: string) => Promise<void>;
}

const ShowItem: FC<IShowProps> = ({
  show,
  deleteShow,
}): ReactElement | null => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);

  const getMovie = useCallback(async () => {
    try {
      const response = await movieService.getMovie(show?.movie! as string);
      setMovie(response.data.movie);
    } catch (error) {
      console.error(error);
    }
  }, [show.movie]);

  useEffectOnce(() => {
    getMovie();
  });

  return (
    <ListItem $img>
      {movie ? <img src={movie.img} alt={movie.name} /> : null}
      <Grid>
        <h4>{movie.name}</h4>
        <h4>{show.time}</h4>
        <h4>{show.date}</h4>
      </Grid>
      <Icons>
        <Link to={`/admin/show/edit/${show._id}`}>
          <AiOutlineEdit style={{ fill: themeGlobal.blue }} />
        </Link>
        <MdDeleteForever
          style={{ fill: themeGlobal.red }}
          onClick={() => deleteShow(show._id as string)}
        />
      </Icons>
    </ListItem>
  );
};

export default ShowItem;
