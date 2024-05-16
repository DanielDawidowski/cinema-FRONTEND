import React, { useState, useEffect } from "react";
import type { FC, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../redux-toolkit/hooks";
import { Utils } from "../../../../utils/utils";
import {
  Day,
  Days,
  MoviesList,
  TodaysMovieList,
  TodaysMovieListItem,
} from "./HomeMovies.styles";
import { AppDispatch } from "../../../../redux-toolkit/store";
import CityList from "../city/CityList";
import { Line } from "../../../../components/layout/globalStyles/global.styles";

const MovieTodaysList: FC = (): ReactElement => {
  const [days, setDays] = useState<string[]>([]);
  const [day, setDay] = useState<string>("Today");

  const { showsList, city } = useAppSelector((state) => state.shows);
  const { movies, filteredMovies } = useAppSelector((state) => state.movies);

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (day: string) => {
    setDay(day);
  };

  useEffect(() => {
    Utils.getCurrentSixDays(setDays);
  }, []);

  return (
    <MoviesList>
      {!city ? (
        <CityList />
      ) : (
        <>
          <Days>
            {days.map((d, i) => (
              <Day key={i} $selected={d === day} onClick={() => handleClick(d)}>
                <h4>{d}</h4>
                {d === day ? <Line $gradient $width="100%" /> : null}
              </Day>
            ))}
          </Days>
          <TodaysMovieList>
            <TodaysMovieListItem></TodaysMovieListItem>
          </TodaysMovieList>
        </>
      )}
    </MoviesList>
  );
};

export default MovieTodaysList;
