import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { Container } from "../../../components/layout/globalStyles/global.styles";
import HomeMovieList from "./list/HomeMovieList";
import Filters from "./filters/HomeFilters";

const HomeMovies: FC = (): ReactElement => {
  const [type, setType] = useState<string>("Per movie");

  return (
    <Container style={{ height: "200vh" }}>
      <Filters type={type} setType={setType} />
      {type === "Per movie" ? <HomeMovieList /> : null}
    </Container>
  );
};

export default HomeMovies;
