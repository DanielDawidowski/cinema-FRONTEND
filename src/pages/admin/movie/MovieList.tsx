import React, { useState, useEffect, useCallback } from "react";
import type { FC, ReactElement } from "react";
import axios from "axios";
import { movieService } from "../../../services/api/movie/movie.service";
import Layout from "../../../components/layout/Layout";
import { ValidationError } from "../../../interfaces/error/Error.interface";
import { IMovie } from "../../../interfaces/movie/movie.interface";
import {
  Container,
  ErrorMessage,
} from "../../../components/layout/globalStyles/global.styles";
import Spinner from "../../../components/spinner/Spinner";
import { MovieListStyles } from "./CreateMovie.styles";
import MovieItem from "./MovieItem";

const MovieList: FC = (): ReactElement => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getAllMovies = useCallback(async (): Promise<void> => {
    try {
      const response = await movieService.getAllMovies();
      setMovies(response.data.list);
      // console.log("response", response.data.events);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const deleteMovie = async (movieId: string): Promise<void> => {
    const result = window.confirm("Czy na pewno chcesz usunąć?");
    if (result) {
      try {
        await movieService.deleteMovie(movieId);
        // console.log("response", response);
        getAllMovies();
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

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return (
    <Layout>
      <Container $small>
        <MovieListStyles>
          {loading ? (
            <Spinner />
          ) : (
            <>
              {errorMessage ? (
                <ErrorMessage>{errorMessage}</ErrorMessage>
              ) : null}
              {movies.map((movie, i) => (
                <MovieItem key={i} movie={movie} deleteMovie={deleteMovie} />
              ))}
            </>
          )}
        </MovieListStyles>
      </Container>
    </Layout>
  );
};

export default MovieList;
