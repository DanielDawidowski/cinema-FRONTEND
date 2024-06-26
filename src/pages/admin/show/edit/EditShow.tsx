import React, { useState, useCallback } from "react";
import type { FC, ReactElement, FormEvent } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import type { NavigateFunction } from "react-router-dom";
import Layout from "../../../../components/layout/Layout";
import { ValidationError } from "../../../../interfaces/error/Error.interface";
import {
  Container,
  Grid,
  ListStyles,
} from "../../../../components/layout/globalStyles/global.styles";
import useEffectOnce from "../../../../hooks/useEffectOnce";
import { IShow } from "../../../../interfaces/show/show.interface";
import { showService } from "../../../../services/api/show/show.service";
import ShowForm from "../../../../components/form/show/Show.form";

const initialState: IShow = {
  city: "",
  hall: 0,
  movie: {
    _id: "",
    name: "",
    img: "",
    category: [],
    description: "",
  },
  time: "",
};

const EditShow: FC = (): ReactElement => {
  const [values, setValues] = useState<IShow>(initialState);
  const [show, setShow] = useState<IShow>({} as IShow);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate: NavigateFunction = useNavigate();
  const { showId } = useParams();

  const getShow = useCallback(async () => {
    try {
      const response = await showService.getShow(showId);
      setShow(response.data.show);
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
  }, [showId]);

  const editShow = async (e: FormEvent): Promise<void | undefined> => {
    e.preventDefault();
    setLoading(true);
    values.city = values.city ? values.city : show.city;
    values.hall = values.hall ? values.hall : show.hall;
    values.time = values.time ? values.time : show.time;
    values.movie = {
      _id: values.movie._id ? values.movie._id : show.movie._id,
      name: values.movie.name ? values.movie.name : show.movie.name,
      img: values.movie.img ? values.movie.img : show ? show.movie.img : "",
      category: values.movie.category
        ? values.movie.category
        : show.movie.category,
      description: values.movie.description
        ? values.movie.description
        : show.movie.description,
    };

    try {
      await showService.updateShow(showId as string, values);
      setLoading(false);
      setHasError(false);
      setValues(initialState);
      navigate("/admin/shows");
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
    getShow();
  });

  return (
    <Layout>
      <Container $small>
        <ListStyles>
          <Grid>
            <ShowForm
              values={values}
              setValues={setValues}
              eventAction={editShow}
              loading={loading}
              hasError={hasError}
              errorMessage={errorMessage}
            />
          </Grid>
        </ListStyles>
      </Container>
    </Layout>
  );
};

export default EditShow;
