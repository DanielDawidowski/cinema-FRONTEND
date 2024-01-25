import React, { useState, useEffect } from "react";
import type {
  FC,
  ReactElement,
  FormEvent,
  ChangeEvent,
  SetStateAction,
  Dispatch as ReactDispatch,
} from "react";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";
import axios from "axios";
import Layout from "../../../components/layout/Layout";
import { useAppDispatch } from "../../../redux-toolkit/hooks";
import { ValidationError } from "../../../interfaces/error/Error.interface";
import { movieService } from "../../../services/api/movie/movie.service";

import {
  IMovie,
  IMovieCategories,
  IMovieCategory,
  movieCategories as movieCat,
} from "../../../interfaces/movie/movie.interface";
import { CreateMovieStyles } from "./CreateMovie.styles";
import MovieForm from "../../../components/form/movie/Movie.form";
import { Grid } from "../../../components/layout/globalStyles/global.styles";

const initialState: IMovie = {
  name: "",
  category: [IMovieCategory.action],
  description: "",
  img: "",
};

const CreateMovie: FC = (): ReactElement => {
  const [values, setValues] = useState<IMovie>(initialState);
  const [categoryList, setCategoryList] = useState<IMovieCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const createMovie = async (e: FormEvent): Promise<void | undefined> => {
    e.preventDefault();
    setLoading(true);
    values.category = categoryList;
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
