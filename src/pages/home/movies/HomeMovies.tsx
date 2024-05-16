import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { Container } from "../../../components/layout/globalStyles/global.styles";
import MovieList from "./list/MovieList";
import Filters from "./filters/HomeFilters";
import MovieTodaysList from "./list/MovieTodaysList";

const HomeMovies: FC = (): ReactElement => {
  const [type, setType] = useState<string>("Per day");

  return (
    <Container>
      <Filters type={type} setType={setType} />
      {type === "Per movie" ? <MovieList /> : null}
      {type === "Per day" ? <MovieTodaysList /> : null}
    </Container>
  );
};

export default HomeMovies;
