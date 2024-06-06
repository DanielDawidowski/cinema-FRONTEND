import React, { useState, useEffect } from "react";
import type { FC, ReactElement } from "react";
import { Container } from "../../../components/layout/globalStyles/global.styles";
import MovieList from "./list/MovieList";
import Filters from "./filters/HomeFilters";
import MovieTodaysList from "./list/MovieTodaysList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux-toolkit/store";
import { useAppSelector } from "../../../redux-toolkit/hooks";
import { getShowsList } from "../../../redux-toolkit/api/shows";

const HomeMovies: FC = (): ReactElement => {
  const [type, setType] = useState<string>("Per day");

  const { city } = useAppSelector((state) => state.shows);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getShowsList({ city }));
  }, [dispatch, city]);

  return (
    <Container>
      <Filters type={type} setType={setType} />
      {type === "Per movie" ? <MovieList /> : null}
      {type === "Per day" ? <MovieTodaysList /> : null}
    </Container>
  );
};

export default HomeMovies;
