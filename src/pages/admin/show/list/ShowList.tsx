import React, { useState, useEffect, useCallback, useMemo } from "react";
import type { FC, ReactElement } from "react";
import axios from "axios";
import Layout from "../../../../components/layout/Layout";
import { ValidationError } from "../../../../interfaces/error/Error.interface";
import {
  Container,
  ErrorMessage,
} from "../../../../components/layout/globalStyles/global.styles";
import Spinner from "../../../../components/spinner/Spinner";
import { showService } from "../../../../services/api/show/show.service";
import { IShow } from "../../../../interfaces/show/show.interface";
import { ShowUtils } from "../../../../utils/show-utils";
import ShowItem from "./ShowItem";
import { movieService } from "../../../../services/api/movie/movie.service";
import { IMovie } from "../../../../interfaces/movie/movie.interface";
import Select from "../../../../components/select/Select";
import { MovieUtils } from "../../../../utils/movie-utils";
import { cities } from "../../../../interfaces/city/city.interface";

const ShowList: FC = (): ReactElement => {
  const [shows, setShows] = useState<IShow[]>([]);
  const [movieId, setMovieId] = useState<string>("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

  const getAllShows = useCallback(async (): Promise<void> => {
    try {
      if (city || movieId) {
        const response = await showService.getShowsByFilters(
          city ? city : movieId,
          movieId
        );
        setShows(response.data.list);
      } else {
        const response = await showService.getAllShow();
        setShows(response.data.list);
      }
      // console.log("response", response.data.events);
    } catch (error) {
      console.log("error", error);
    }
  }, [city, movieId]);

  const getAllMovies = useCallback(async (): Promise<void> => {
    try {
      const response = await movieService.getAllMovies();
      setMovies(response.data.list);
      // console.log("response", response.data.events);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const deleteShow = async (showId: string): Promise<void> => {
    const result = window.confirm("Czy na pewno chcesz usunąć?");
    if (result) {
      try {
        await showService.deleteShow(showId);
        // console.log("response", response);
        getAllShows();
      } catch (error) {
        if (
          axios.isAxiosError<ValidationError, Record<string, unknown>>(error) &&
          error.response
        ) {
          setLoading(false);
          setErrorMessage(error?.response?.data.message as string);
        } else {
          console.error(error);
        }
      }
    }
  };

  const handleCity = (name: string): void => {
    setCity(name);
  };

  const handleMovie = (name: string): void => {
    const movieId = MovieUtils.movieId(movies, name);
    setMovieId(movieId);
    setSelectedMovie(name);
  };

  const sortedShows = useMemo(() => shows.sort(ShowUtils.sortShows), [shows]);

  useEffect(() => {
    getAllShows();
    getAllMovies();
  }, [getAllShows, getAllMovies]);

  return (
    <Layout>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
            <Select
              label="City"
              options={cities}
              selectedOption={city!}
              onSelect={(option: string) => handleCity(option)}
            />

            <Select
              label="Pick Movie"
              options={MovieUtils.movieTitles(movies)}
              selectedOption={selectedMovie!}
              onSelect={(option: string) => handleMovie(option)}
            />
            {sortedShows.map((show: IShow, i: number) => (
              <ShowItem key={i} show={show} deleteShow={deleteShow} />
            ))}
          </>
        )}
      </Container>
    </Layout>
  );
};

export default ShowList;
