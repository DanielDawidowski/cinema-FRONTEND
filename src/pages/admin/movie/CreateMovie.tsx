import React, { useState } from "react";
import type { FC, ReactElement, FormEvent } from "react";
import axios from "axios";
import Layout from "../../../components/layout/Layout";
import { ValidationError } from "../../../interfaces/error/Error.interface";
import { movieService } from "../../../services/api/movie/movie.service";
import {
  IMovie,
  IMovieCategory,
} from "../../../interfaces/movie/movie.interface";
import { CreateMovieStyles } from "./CreateMovie.styles";
import MovieForm from "../../../components/form/movie/Movie.form";
import { Grid } from "../../../components/layout/globalStyles/global.styles";

const initialState: IMovie = {
  name: "",
  category: [],
  description: "",
  director: "",
  actors: [],
  img: "",
};

const CreateMovie: FC = (): ReactElement => {
  const [values, setValues] = useState<IMovie>(initialState);
  const [categoryList, setCategoryList] = useState<IMovieCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [actors, setActors] = useState<string[]>([]);

  const createMovie = async (e: FormEvent): Promise<void | undefined> => {
    e.preventDefault();
    setLoading(true);
    values.category = categoryList;
    values.actors = actors;
    try {
      await movieService.create(values);
      setLoading(false);
      setHasError(false);
      setValues(initialState);
      console.log("created movie");
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

  return (
    <Layout>
      <CreateMovieStyles>
        <Grid>
          <MovieForm
            values={values}
            setValues={setValues}
            eventAction={createMovie}
            setCategoryList={setCategoryList}
            categoryList={categoryList}
            actors={actors}
            setActors={setActors}
            loading={loading}
            hasError={hasError}
            errorMessage={errorMessage}
          />
        </Grid>
      </CreateMovieStyles>
    </Layout>
  );
};

export default CreateMovie;
