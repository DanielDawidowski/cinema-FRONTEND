import React, { useState, useCallback, useEffect } from "react";
import type { FC, ReactElement, FormEvent } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import type { NavigateFunction } from "react-router-dom";

import Layout from "../../../../components/layout/Layout";
import { ValidationError } from "../../../../interfaces/error/Error.interface";
import { movieService } from "../../../../services/api/movie/movie.service";
import {
  IMovie,
  IMovieCategory,
} from "../../../../interfaces/movie/movie.interface";
import { CreateMovieStyles } from "../Movie.styles";
import MovieForm from "../../../../components/form/movie/Movie.form";
import { Grid } from "../../../../components/layout/globalStyles/global.styles";
import useEffectOnce from "../../../../hooks/useEffectOnce";

const initialState: IMovie = {
  name: "",
  category: [IMovieCategory.action],
  description: "",
  director: "",
  actors: [],
  img: "",
};

const EditMovie: FC = (): ReactElement => {
  const [values, setValues] = useState<IMovie>(initialState);
  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  const [categoryList, setCategoryList] = useState<IMovieCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [actors, setActors] = useState<string[]>([]);

  const navigate: NavigateFunction = useNavigate();
  const { movieId } = useParams();

  const getMovie = useCallback(async () => {
    try {
      const response = await movieService.getMovie(movieId as string);
      setMovie(response.data.movie);
    } catch (error) {
      if (
        axios.isAxiosError<ValidationError, Record<string, unknown>>(error) &&
        error.response
      ) {
        setLoading(false);
        setHasError(true);
        setErrorMessage(error?.response?.data.message as string);
      } else {
        console.error(error);
      }
    }
  }, [movieId]);

  const editMovie = async (e: FormEvent): Promise<void | undefined> => {
    e.preventDefault();
    setLoading(true);
    values.img = values.img ? values.img : movie.img;
    values.category = categoryList.length > 0 ? categoryList : movie.category;
    values.name = values.name ? values.name : movie.name;
    values.description = values.description
      ? values.description
      : movie.description;

    try {
      await movieService.updateMovie(movieId as string, values);
      setLoading(false);
      setHasError(false);
      setValues(initialState);
      console.log("edited movie");
      navigate("/admin/movies");
    } catch (error) {
      if (
        axios.isAxiosError<ValidationError, Record<string, unknown>>(error) &&
        error.response
      ) {
        setLoading(false);
        setHasError(true);
        setErrorMessage(error?.response?.data.message as string);
      } else {
        console.error(error);
      }
    }
  };

  useEffectOnce(() => {
    getMovie();
  });

  useEffect(() => {
    if (movie) {
      setCategoryList(movie.category);
    }
  }, [movie]);

  return (
    <Layout>
      <CreateMovieStyles>
        <Grid>
          <h3>{movie?.name}</h3>
          <MovieForm
            values={values}
            setValues={setValues}
            eventAction={editMovie}
            setCategoryList={setCategoryList}
            categoryList={categoryList}
            actors={actors}
            setActors={setActors}
            loading={loading}
            hasError={hasError}
            errorMessage={errorMessage}
            movie={movie}
          />
        </Grid>
      </CreateMovieStyles>
    </Layout>
  );
};

export default EditMovie;
