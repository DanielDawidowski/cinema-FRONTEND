import React from "react";
import type { FC, ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import Carousel from "../../components/carousel/Carousel";
import HomeMovies from "./movies/HomeMovies";

const Home: FC = (): ReactElement => {
  return (
    <Layout>
      <Carousel />
      <HomeMovies />
    </Layout>
  );
};

export default Home;
