import React, { useState, useEffect, useCallback, useMemo } from "react";
import type { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "../../../../redux-toolkit/hooks";
import { Utils } from "../../../../utils/utils";
import {
  Day,
  Days,
  MovieItemCategories,
  MovieItemContent,
  MoviesList,
  TodaysMovieList,
  TodaysMovieListItem,
} from "./HomeMovies.styles";
import CityList from "../city/CityList";
import {
  Grid,
  Line,
} from "../../../../components/layout/globalStyles/global.styles";
import { IShow, IShows } from "../../../../interfaces/show/show.interface";
import { Link } from "react-router-dom";
import { ShowListItem } from "../../Home.styles";
import { IoMdArrowRoundForward } from "react-icons/io";
import Tooltip from "../../../../components/tooltip/Tooltip";
import { FaInfoCircle } from "react-icons/fa";
import { themeGlobal } from "../../../../components/layout/globalStyles/variables";
import { IMovieCategory } from "../../../../interfaces/movie/movie.interface";
import useWindowSize from "../../../../hooks/useWindowSize";
import { BreakPoint } from "../../../../components/layout/Layout.interface";
import Select from "../../../../components/select/Select";
import Spinner from "../../../../components/spinner/Spinner";

const MovieTodaysList: FC = (): ReactElement => {
  const [days, setDays] = useState<string[]>([]);
  const [day, setDay] = useState<string>("Today");

  const size = useWindowSize();

  const { filteredShows, showsList, city, isLoading } = useAppSelector(
    (state) => state.shows
  );

  const handleClick = (day: string) => {
    setDay(day);
  };

  const renderShows = useCallback((shows: IShows[]) => {
    let result: JSX.Element[] = [];

    result = shows.map((show: IShows, i: number) => (
      <TodaysMovieListItem key={i}>
        <img src={show.movie.img} alt={show.movie.name} />
        <h3>{show.movie.name}</h3>
        <MovieItemCategories>
          {show.movie.category.map((category: IMovieCategory, ic: number) => (
            <h5>{category}</h5>
          ))}
        </MovieItemCategories>
        {show.shows ? (
          <MovieItemContent>
            {show.shows.map((s: IShow, index: number) => (
              <Link key={index} to={`/booking/${s._id}`}>
                <ShowListItem>
                  <div>
                    <h5>{s.time}</h5>
                    <IoMdArrowRoundForward />
                  </div>
                  <motion.div>
                    <Tooltip text={`Hall ${s.hall}`}>
                      <FaInfoCircle style={{ fill: themeGlobal.white }} />
                    </Tooltip>
                  </motion.div>
                </ShowListItem>
              </Link>
            ))}
          </MovieItemContent>
        ) : null}
      </TodaysMovieListItem>
    ));

    return result;
  }, []);

  const memorizeShows = useMemo(
    () => renderShows(filteredShows.length > 0 ? filteredShows : showsList),
    [renderShows, filteredShows, showsList]
  );

  useEffect(() => {
    Utils.getCurrentSixDays(setDays);
  }, []);

  return (
    <MoviesList>
      {isLoading ? (
        <Grid>
          <Spinner size={30} />
          ... loading
        </Grid>
      ) : (
        <>
          {!city ? <CityList /> : null}
          {city ? (
            <>
              {size.width > BreakPoint.small ? (
                <Days>
                  {days.map((d, i) => (
                    <Day
                      key={i}
                      $selected={d === day}
                      onClick={() => handleClick(d)}
                    >
                      <h4>{d}</h4>
                      {d === day ? <Line $gradient $width="100%" /> : null}
                    </Day>
                  ))}
                </Days>
              ) : (
                <Select
                  label="City"
                  options={days}
                  selectedOption={day!}
                  onSelect={(day: string) => handleClick(day)}
                />
              )}
              <TodaysMovieList>{memorizeShows}</TodaysMovieList>
            </>
          ) : null}
        </>
      )}
    </MoviesList>
  );
};

export default MovieTodaysList;
